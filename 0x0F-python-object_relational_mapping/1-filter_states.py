#!/usr/bin/python3
"""Lists all states with a name starting with N (upper N)
from the database hbtn_0e_0_usa"""

import sys
import MySQLdb

if __name__ == "__main__":
    # Connect to the database
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()

    # Query the database to get states starting with 'N'
    c.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id")
    rows = c.fetchall()

    # Display the results
    for row in rows:
        print(row)

