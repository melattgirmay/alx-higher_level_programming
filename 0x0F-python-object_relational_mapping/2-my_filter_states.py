#!/usr/bin/python3
"""
This script takes in an argument and
displays all values in the states
where `name` matches the argument
from the database `hbtn_0e_0_usa`.
"""

import MySQLdb
from sys import argv

if __name__ == '__main__':
    # Connect to the database
    db = MySQLdb.connect(host="localhost", user=argv[1], passwd=argv[2], db=argv[3])
    cur = db.cursor()

    # Use placeholders and execute method to handle user input safely
    cur.execute("SELECT * FROM states WHERE name LIKE BINARY %s ORDER BY states.id ASC", (argv[4],))
    rows = cur.fetchall()

    # Display the results
    for row in rows:
        print(row)

