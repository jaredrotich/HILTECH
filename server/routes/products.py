from flask import Blueprint, request, jsonify
from app import db
from models import Product

products_bp = Blueprint('products', __name__, url_prefix='/products')

def save_image(image_file):
    # Placeholder — replace with actual saving logic (e.g., save to folder/cloud)
    return f"uploads/{image_file.filename}" if image_file else None

@products_bp.route('', methods=['POST'])
def create_product():
    data = request.form
    image_file = request.files.get('image')

    new_product = Product(
        name=data['name'],
        description=data['description'],
        price=float(data['price']),
        discount=data.get('discount'),
        stock=int(data['stock']),
        image=save_image(image_file),
        category_id=int(data['category_id'])
    )

    db.session.add(new_product)
    db.session.commit()

    return jsonify({"message": "Product created successfully"}), 201


@products_bp.route('', methods=['GET'])
def get_all_products():
    products = Product.query.all()
    result = [{
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "price": p.price,
        "discount": p.discount,
        "stock": p.stock,
        "image": p.image,
        "category_id": p.category_id
    } for p in products]

    return jsonify(result), 200
