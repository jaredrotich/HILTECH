from flask import Blueprint, request, jsonify
from models import db, Order, OrderItem, Product, Client
from flask_jwt_extended import get_jwt_identity, jwt_required

orders_bp = Blueprint('orders_bp', __name__, url_prefix='/api/orders')


@orders_bp.route('/', methods=['POST'])
@jwt_required(optional=True)
def create_order():
    data = request.get_json()
    
    client_data = data['client']
    items_data = data['items']
    shipping = data.get('shipping', 0)
    total = data['total']
    
   
    client = Client(**client_data)
    db.session.add(client)
    db.session.flush()

   
    user_id = get_jwt_identity()

   
    order = Order(
        client_id=client.id,
        admin_id=user_id,
        total=total,
        shipping=shipping
    )
    db.session.add(order)
    db.session.flush()

   
    for item in items_data:
        order_item = OrderItem(
            order_id=order.id,
            product_id=item['product_id'],
            quantity=item['quantity'],
            price=item['price']
        )
        db.session.add(order_item)

    db.session.commit()
    return jsonify({"message": "Order created ✅", "order_id": order.id}), 201
