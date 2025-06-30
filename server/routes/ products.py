from flask import Blueprint, jsonify
from models import Product

products_bp = Blueprint('products', __name__, url_prefix='/products')

@products_bp.route('/', methods=['GET'])
def get_all_products():
    products = Product.query.all()
    data = [{
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "price": p.price,
        "discount": p.discount,
        "stock": p.stock,
        "image": p.image,
        "category": p.category
    } for p in products]
    return jsonify(data), 200
