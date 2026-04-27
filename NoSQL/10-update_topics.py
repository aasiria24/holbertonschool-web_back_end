#!/usr/bin/env python3
"""Module that provides a function to update topics of a school document."""
from typing import List


def update_topics(mongo_collection, name: str, topics: List[str]) -> None:
    """Update all topics of a school document based on the school name.

    Args:
        mongo_collection: the pymongo collection object to update.
        name: the name of the school document to update.
        topics: the list of topics to set for the school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
