from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    discount = db.Column(db.String(20))
    stock = db.Column(db.Integer)
    image = db.Column(db.String(255))
    category = db.Column(db.String(100))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(255))

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100))
    user_phone = db.Column(db.String(50))
    user_address = db.Column(db.String(255))
    order_date = db.Column(db.String(100))
    items = db.Column(db.Text)  
    subtotal = db.Column(db.Float)
    shipping = db.Column(db.Float)
    total = db.Column(db.Float)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    content = db.Column(db.Text)
