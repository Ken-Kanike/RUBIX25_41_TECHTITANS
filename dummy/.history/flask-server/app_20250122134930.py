from flask import Flask, jsonify

app = Flask(__name__)

@app.get('/members')
def home():
    return {"members": ["me1", "me2"]}

if __name__ == "__main__":
    app.run(debug=True)
