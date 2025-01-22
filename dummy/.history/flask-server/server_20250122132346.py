from flask import Flask
app = Flask(__name__)

@app.get('/')
def home():
    return "hello world hackathon!"  # Render a template (optional)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
