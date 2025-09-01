from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from utils.admin_utils import current_admin, is_supreme_admin

home_bp = Blueprint('home', __name__, url_prefix='/home')

@home_bp.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    if not is_supreme_admin():
        return jsonify({"error": "Unauthorized access – Supreme Admins only."}), 403

    return jsonify({"message": "Welcome to the HOME dashboard, Supreme Admin 🔥"})
