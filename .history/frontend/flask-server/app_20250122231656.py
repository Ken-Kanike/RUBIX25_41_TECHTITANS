from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


import routes

if __name__ == "__main__":
    app.run(debug=True)
