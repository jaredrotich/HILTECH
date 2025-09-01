from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_cors import CORS
from config import Config


db = SQLAlchemy()
migrate = Migrate()
mail = Mail()


app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = "!<POTUS>"


db.init_app(app)
migrate.init_app(app, db)
mail.init_app(app)
CORS(app, supports_credentials=True)


from routes import register_blueprints
register_blueprints(app)
