from flask import Flask, jsonify, request
from flask_cors import CORS
from app import app

# Members route
@app.get('/')
def home():
    return {"members": ["me1", "me2", "me3", "me4", "me5"]}
@app.route('/signin')
def signin():
     return jsonify({"message": "Sign In Successful"}), 200 

@app.route('/signin',methods=['POST'])
def signin_post():
    
        data = request.get_json()  
        email = data.get('email')
        password = data.get('password')
        
        
        if email == "test@example.com" and password == "password123":
            return jsonify({"message": "Sign In Successful"}), 200  
        else:
            return jsonify({"message": "Invalid credentials"}), 401  

