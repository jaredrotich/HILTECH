from flask import Blueprint, request, jsonify
from flask_mail import Message
from app import db, mail
from models import Message as ContactMessage
import os

contact_bp = Blueprint('contact', __name__, url_prefix='/contact')

@contact_bp.route('/', methods=['POST'])
def send_message():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    content = data.get("message")

    if not all([name, email, content]):
        return jsonify({"error": "All fields required"}), 400

    contact = ContactMessage(name=name, email=email, content=content)
    db.session.add(contact)
    db.session.commit()

    msg = Message(f"New Contact from {name}",
                  sender=os.getenv("MAIL_USERNAME"),
                  recipients=[os.getenv("ADMIN_EMAIL")])
    msg.body = f"{name} ({email}) wrote:\n\n{content}"
    mail.send(msg)

    return jsonify({"message": "Message sent"}), 200
