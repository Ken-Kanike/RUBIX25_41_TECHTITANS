from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.get('/members')
def home():
    return {"members": ["me1", "me2", "me3", "me4", "me5"]}

if __name__ == "__main__":
    app.run(debug=True)
