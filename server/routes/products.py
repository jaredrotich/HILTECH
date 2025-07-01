from flask import Blueprint, jsonify
from models import Product

products_bp = Blueprint('products', __name__, url_prefix='/products')

@app.route('/products', methods=['POST'])
def create_product():
    data = request.form
    image_file = request.files.get('image') 

    new_product = Product(
        name=data['name'],
        description=data['description'],
        price=float(data['price']),
        discount=data.get('discount', None),
        stock=int(data['stock']),
        image=save_image(image_file),
        category_id=int(data['category_id'])
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product created successfully"}), 201
