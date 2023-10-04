import pandas as pd
import numpy as np
pd.set_option('max_colwidth', 400)

nba_df = pd.read_csv('Cleaning Data/nba_cleaned.csv')

import warnings
warnings.filterwarnings('ignore')

# Import Dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy import inspect
from flask import Flask, jsonify
from sqlalchemy import text
from flask import Flask, render_template

# Create an engine for the chinook.sqlite database

engine = create_engine("sqlite:///nba_database.sqlite", echo=False)




app = Flask (__name__)


@app.route("/")
def welcome():
    return render_template('index.html')

    with engine.connect() as conn:
        x= conn.execute(text("SELECT * FROM nba_data")).fetchall()
        nba = list(np.ravel(x))
        return jsonify(nba)


if __name__ == '__main__':
    app.run(debug=True)




# app = Flask(__name__)

# @app.route('/')
# def home():
#    return render_template('index.html')
# if __name__ == '__main__':
#    app.run()