#!/usr/bin/env python3
"""Module that provides a function to list all documents in a collection."""
from typing import List


def list_all(mongo_collection) -> List:
    """List all documents in a MongoDB collection.

    Args:
        mongo_collection: the pymongo collection object to query.

    Returns:
        A list of all documents in the collection, or an empty list
        if no documents are found.
    """
    documents = list(mongo_collection.find())
    return documents if documents else []
