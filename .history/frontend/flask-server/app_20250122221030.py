from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Members route
@app.get('/members')
def home():
    return {"members": ["me1", "me2", "me3", "me4", "me5"]}

# Signin route (No need to return HTML, only handle POST request)
@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()  # Parse incoming JSON data
    email = data.get('email')
    password = data.get('password')
    
    # Handle authentication logic (simple example)
    if email == "test@example.com" and password == "password123":
        return jsonify({"message": "Sign In Successful"}), 200  # Success response
    else:
        return jsonify({"message": "Invalid credentials"}), 401  # Error response

if __name__ == "__main__":
    app.run(debug=True)
