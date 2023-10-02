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

# Create an engine for the chinook.sqlite database

engine = create_engine("sqlite:///nba_database.sqlite", echo=False)




app = Flask (__name__)


@app.route("/")
def welcome():
    return ("Hello Internet")

def nba ():
from sqlalchemy import text
with engine.connect() as conn:
   x= conn.execute(text("SELECT * FROM nba_data")).fetchall()
   print(x)


if __name__ == '__main__':
    app.run(debug=True)