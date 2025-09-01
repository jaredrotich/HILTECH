from flask import Blueprint, request, jsonify
from app import db
from models import Order, OrderItem, Product
from datetime import datetime
import random

orders_bp = Blueprint('orders', __name__, url_prefix='/orders')

@orders_bp.route('', methods=['POST'])
def place_order():
    data = request.get_json()

    user_name = data.get('user_name')
    user_phone = data.get('user_phone')
    user_address = data.get('user_address')
    items = data.get('items') 
    shipping = data.get('shipping', 250.00)

    if not all([user_name, user_phone, user_address, items]):
        return jsonify({"error": "Missing required fields"}), 400

    subtotal = sum(item['quantity'] * item['unit_price'] for item in items)
    total = subtotal + shipping

    order = Order(
        user_name=user_name,
        user_phone=user_phone,
        user_address=user_address,
        order_date=datetime.utcnow(),
        subtotal=subtotal,
        shipping=shipping,
        total=total
    )
    db.session.add(order)
    db.session.commit()

   
    for item in items:
        order_item = OrderItem(
            order_id=order.id,
            product_id=item['product_id'],
            quantity=item['quantity'],
            unit_price=item['unit_price']
        )
        db.session.add(order_item)

    db.session.commit()

   
    order_info = {
        "order_id": f"{order.id:05d}",
        "order_date": order.order_date.strftime("%B %d, %Y %I:%M %p"),
        "user_name": order.user_name,
        "user_phone": order.user_phone,
        "user_address": order.user_address,
        "items": [],
        "subtotal": subtotal,
        "shipping": shipping,
        "total": total,
    }

    for item in order.order_items:
        product = Product.query.get(item.product_id)
        order_info["items"].append({
            "name": product.name,
            "description": product.description,
            "price": item.unit_price,
            "quantity": item.quantity,
            "total": item.unit_price * item.quantity,
            "image": product.image
        })

    return jsonify(order_info), 201
