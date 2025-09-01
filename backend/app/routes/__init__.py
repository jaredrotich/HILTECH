from .products import products_bp
from .categories import categories_bp
from .orders import orders_bp
from .auth import auth_bp
from .home import home_bp 

def register_blueprints(app):
    app.register_blueprint(products_bp)
    app.register_blueprint(categories_bp)
    app.register_blueprint(orders_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(home_bp)

# @app.route("/")
# def index():
#     return {"message": "Hiltech Admin API is running ✅"}
