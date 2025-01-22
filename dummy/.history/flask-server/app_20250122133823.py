from flask import Flask, jsonify

app = Flask(__name__)

@app.get('/')
def home():
    return jsonify({"members": ["me1", "me2"]})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
