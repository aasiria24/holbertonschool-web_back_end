#!/usr/bin/env python3
"""Module that provides a function to insert a document in a collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in a MongoDB collection based on kwargs.

    Args:
        mongo_collection: the pymongo collection object to insert into.
        **kwargs: key-value pairs representing the document attributes.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
