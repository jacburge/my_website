from app import app
from flask import render_template

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/professional/')
def professional():
	return render_template('professional.html')

@app.route('/creative/')
def creative():
	return render_template('creative.html')

@app.route('/fun/')
def fun():
	return render_template('fun.html')

@app.route('/portfolio/')
def portfolio():
	return render_template('portfolio.html')

@app.route('/old_index/')
def portfolio():
	return render_template('old_index.html')
