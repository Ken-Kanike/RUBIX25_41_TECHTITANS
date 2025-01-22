from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

'''@app.get('/members')
def home():
    return {"members": ["me1", "me2", "me3","me4","me5"]}'''
@app.route('/')
def home():
    return jsonify(message="Welcome to the Flask API!")

# Endpoint for SignIn
@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    password = data.get('password')

    # Replace this with your actual user authentication logic
    if username == "admin" and password == "admin":
        return jsonify(message="Sign In Successful!")
    else:
        return jsonify(message="Invalid credentials!"), 401

# Endpoint for a generic "about" page (you can expand this to other pages)
@app.route('/about')
def about():
    return jsonify(message="About the Hackathon App")

if __name__ == "__main__":
    app.run(debug=True)
