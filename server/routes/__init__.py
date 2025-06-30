from flask import Blueprint
from app import app
from routes.products import products_bp
from routes.contact import contact_bp
from routes.orders import orders_bp
from routes.auth import auth_bp

app.register_blueprint(products_bp)
app.register_blueprint(contact_bp)
app.register_blueprint(orders_bp)
app.register_blueprint(auth_bp)
