from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.get('/members')
def home():
    return {"members": ["me1", "me2"]}

if __name__ == "__main__":
    app.run(debug=True)
