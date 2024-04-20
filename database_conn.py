import psycopg2
from config import db_name, user, password, host

def get_column_names(table_name):
    conn = psycopg2.connect(
        dbname=db_name,
        user=user,
        password=password,
        host=host
    )

    column_names = []
    try:
        cur = conn.cursor()
        cur.execute(f"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = %s;", (table_name,))
        columns = cur.fetchall()
        column_names = [col[0] for col in columns]
        column_names.remove('id')
        cur.close()
    except Exception as error:
        print("Error fetching column names:", error)
    finally:
        if conn:
            conn.close()
    return column_names

def getData(myTable):
    conn = psycopg2.connect(
        dbname=db_name,
        user=user,
        password=password,
        host=host
    )
    try:
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM {myTable}")
        return cur.fetchall()
    except Exception as error:
        print("Error in transaction. Reverting all other operations of a transaction", error)
        conn.rollback()
    finally:
        if conn:
            conn.close()

print(getData('coordinates'))