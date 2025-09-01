from flask import Blueprint, request, jsonify
from app.models import db, AdminUser
from flask_jwt_extended import create_access_token
import datetime

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "admin")

    if AdminUser.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 400

    user = AdminUser(email=email, role=role)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = AdminUser.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"error": "Invalid credentials"}), 401

    access_token = create_access_token(
        identity={"email": user.email, "role": user.role},
        expires_delta=datetime.timedelta(days=1)
    )

    return jsonify({
        "access_token": access_token,
        "user": {
            "email": user.email,
            "role": user.role
        }
    }), 200


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = AdminUser(name=data['name'], email=data['email'])
    user.set_password(data['password'])
    user.is_supreme = data.get('email') in ["jaredrotich3@gmail.com", "yegonnewton48@gmail.com"]
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered ✅"})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = AdminUser.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "user": {"name": user.name, "is_supreme": user.is_supreme}})
    return jsonify({"error": "Invalid credentials"}), 401