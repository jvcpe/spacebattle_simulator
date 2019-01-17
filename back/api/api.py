import flask
from flask import request, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from test import Address, Base, Person


app = flask.Flask(__name__)
app.config["DEBUG"] = True

engine = create_engine('postgresql://postgres:sbmdp@localhost:5432/space_battle_simulator')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)

session = DBSession()

@app.route('/test', methods=['GET'])
def home():
# Insert a Person in the person table
    new_person = Person(name='new person')
    session.add(new_person)
    session.commit()

    # Insert an Address in the address table
    new_address = Address(post_code='00000', person=new_person)
    session.add(new_address)
    session.commit()
    response = jsonify({
        "test": True
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()
