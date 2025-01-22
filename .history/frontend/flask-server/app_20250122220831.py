from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Members route
@app.get('/members')
def home():
    return {"members": ["me1", "me2", "me3", "me4", "me5"]}

# Signin route
@app.route('/signin', methods=['GET'])
def signin():
    return render_template('signin.js')  # If you want to return an HTML page
    # OR you can return a JSON message if needed:
    # return jsonify({"message": "Sign In Page"})

if __name__ == "__main__":
    app.run(debug=True)
