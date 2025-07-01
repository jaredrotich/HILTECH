from .products import products_bp
from .auth import auth_bp
from .contact import contact_bp
from .orders import orders_bp
from app import app

app.register_blueprint(products_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(contact_bp)
app.register_blueprint(orders_bp)
