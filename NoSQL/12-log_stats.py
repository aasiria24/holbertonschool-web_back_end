#!/usr/bin/env python3
"""provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def log_stats(mongo_collection):
    """provides some stats about Nginx logs stored in MongoDB"""
    print("{} logs".format(mongo_collection.count_documents({})))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = mongo_collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    status = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status))


if __name__ == "__main__":
    log_stats(MongoClient('mongodb://127.0.0.1:27017').logs.nginx)
