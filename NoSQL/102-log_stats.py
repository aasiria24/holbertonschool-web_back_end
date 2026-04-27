#!/usr/bin/env python3
"""Module that provides statistics about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


def log_stats():
    """Display statistics about Nginx logs stored in the logs database.

    Connects to MongoDB and prints the total number of logs, a breakdown
    of HTTP methods used, the count of status check requests, and the
    top 10 most present IPs in the nginx collection.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx = client.logs.nginx

    print("{} logs".format(nginx.count_documents({})))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = nginx.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    print("{} status check".format(
        nginx.count_documents({"method": "GET", "path": "/status"})
    ))

    print("IPs:")
    top_ips = nginx.aggregate([
        {"$group": {"_id": "$ip", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 10}
    ])
    for ip in top_ips:
        print("\t{}: {}".format(ip.get("_id"), ip.get("count")))


if __name__ == "__main__":
    log_stats()
