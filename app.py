# import pandas as pd
# import numpy as np
# pd.set_option('max_colwidth', 400)

# nba_df = pd.read_csv('Cleaning Data/nba_cleaned.csv')

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
from flask_cors import CORS, cross_origin 


engine = create_engine("sqlite:///nba_database.sqlite", echo=False)



app = Flask(__name__)


# CORS(app)

# header("Access-Control-Allow-Origin: *"):




@app.route('/')
def index():
   return render_template('index.html')

@app.route('/nba')
# @cross_origin()
def nbaData():
    with engine.connect() as conn:
         x= conn.execute(text("SELECT * FROM nba_data"))
         nba = [dict(row) for row in x]
    return jsonify(nba)

@app.route('/regions')
# @cross_origin()
def regions():
    with engine.connect() as conn:
         x= conn.execute(text("SELECT Region,City,AVG(Points) as Avg_Points FROM nba_data Group by Region,City"))
         nba = [dict(row) for row in x]
    return jsonify(nba)
  
 
   
    

    
if __name__ == '__main__':
    app.run(debug=True)
