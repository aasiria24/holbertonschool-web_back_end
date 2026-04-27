#!/usr/bin/env python3
"""Module that provides statistics about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


def log_stats():
    """Display statistics about Nginx logs stored in the logs database.

    Connects to MongoDB and prints the total number of logs, a breakdown
    of HTTP methods used, and the count of status check requests.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    total = collection.count_documents({})
    print("{} logs".format(total))

    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    status = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status))


if __name__ == "__main__":
    log_stats()
