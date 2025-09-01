from flask import Blueprint, request, jsonify
from models import db, Product, Category

products_bp = Blueprint('products_bp', __name__, url_prefix='/api/products')


@products_bp.route('/', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "discount": p.discount,
            "stock": p.stock,
            "image": p.image_url,
            "category": p.category.name
        } for p in products
    ]), 200


@products_bp.route('/', methods=['POST'])
def create_product():
    data = request.get_json()
    new_product = Product(
        name=data['name'],
        description=data.get('description'),
        price=data['price'],
        discount=data.get('discount', 0.0),
        stock=data['stock'],
        image_url=data['image'],
        category_id=data['category_id']
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product added ✅"}), 201
