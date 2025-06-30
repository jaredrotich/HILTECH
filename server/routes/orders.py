from flask import Blueprint, request, jsonify
from flask_mail import Message
from app import db, mail
from models import Order
from datetime import datetime
import json
import os

orders_bp = Blueprint('orders', __name__, url_prefix='/orders')

@orders_bp.route('/', methods=['POST'])
def place_order():
    data = request.get_json()
    name = data.get("name")
    phone = data.get("phone")
    address = data.get("address")
    email = data.get("email")
    items = data.get("items")
    subtotal = data.get("subtotal")
    shipping = data.get("shipping")
    total = data.get("total")

    if not all([name, phone, address, email, items, subtotal, shipping, total]):
        return jsonify({"error": "Missing info"}), 400

    order = Order(
        user_name=name,
        user_phone=phone,
        user_address=address,
        order_date=datetime.now().strftime("%B %d, %Y %I:%M %p"),
        items=json.dumps(items),
        subtotal=subtotal,
        shipping=shipping,
        total=total
    )
    db.session.add(order)
    db.session.commit()

    msg = Message(subject="Hiltech Order Confirmation",
                  sender=os.getenv("MAIL_USERNAME"),
                  recipients=[email])
    
    item_details = ""
    for item in items:
        item_details += f"{item['name']} x{item['quantity']} @ KSH {item['price'] * item['quantity']:,}\n"

    msg.body = f"""
Hiltech Digital - Order Receipt

Customer: {name}
Phone: {phone}
Address: {address}
Date: {order.order_date}

Items:
{item_details}

Sub Total: KSH {subtotal:,.2f}
Shipping: KSH {shipping:,.2f}
Grand Total: KSH {total:,.2f}

Thank you for shopping with us!
www.hiltech.co.ke
"""
    mail.send(msg)

    return jsonify({"message": "Order placed"}), 200