from flask import Flask, render_template
import database_conn as dbc
import psycopg2

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='HackNU',
        user='postgres',
        password='admin'
    )
    return conn

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')

if __name__ == '__main__':
    app.run(debug=True)