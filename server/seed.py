import json
from app import app, db
from models import Category, Product

def seed_data():
    with app.app_context():
        # Clear existing data
        db.session.query(Product).delete()
        db.session.query(Category).delete()
        db.session.commit()

        # Load data from JSON
        with open("data/db.json") as f:
            data = json.load(f)
            products = data.get("products", [])

        category_map = {}

        for item in products:
            category_name = item["category"].strip()

            if category_name not in category_map:
                category = Category(name=category_name)
                db.session.add(category)
                db.session.flush()  
                category_map[category_name] = category.id
            else:
                category = Category.query.get(category_map[category_name])

            product = Product(
                name=item["name"],
                description=item.get("description", ""),
                price=item["price"],
                discount=item.get("discount", ""),
                stock=item.get("stock", 0),
                image=item.get("image", ""),
                category_id=category_map[category_name]
            )
            db.session.add(product)

        db.session.commit()
        print("✅ Seeding complete! Products and categories added.")

if __name__ == "__main__":
    seed_data()
