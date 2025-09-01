from flask_jwt_extended import get_jwt_identity
from models import AdminUser

SUPREME_ADMINS = ["jaredrotich3@gmail.com", "yegonnewton48@gmail.com"]

def current_admin():
    email = get_jwt_identity()
    return AdminUser.query.filter_by(email=email).first()

def is_supreme_admin():
    return get_jwt_identity() in SUPREME_ADMINS
