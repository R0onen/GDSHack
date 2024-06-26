from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('main.html')

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')

if __name__ == '__main__':
    app.run(debug=True)