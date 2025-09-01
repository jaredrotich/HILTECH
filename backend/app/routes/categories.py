from flask import Blueprint, request, jsonify
from models import db, Category

categories_bp = Blueprint('categories_bp', __name__, url_prefix='/api/categories')

@categories_bp.route('/', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return jsonify([{"id": c.id, "name": c.name} for c in categories]), 200

@categories_bp.route('/', methods=['POST'])
def create_category():
    data = request.get_json()
    new_cat = Category(name=data['name'])
    db.session.add(new_cat)
    db.session.commit()
    return jsonify({"message": "Category added"}), 201
