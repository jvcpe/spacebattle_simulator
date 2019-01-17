"""The application's model objects"""
from model.meta import Session, Base

from model.person import Person
from model.person import Adress

def init_model(engine):
    """Call me before using any of the tables or classes in the model"""
    Session.configure(bind=engine)
