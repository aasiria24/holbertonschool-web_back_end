#!/usr/bin/env python3
"""Module that provides a function to find schools by topic."""
from typing import List


def schools_by_topic(mongo_collection, topic: str) -> List:
    """Return the list of schools having a specific topic.

    Args:
        mongo_collection: the pymongo collection object to query.
        topic: the topic string to search for in school documents.

    Returns:
        A list of school documents that include the specified topic.
    """
    return list(mongo_collection.find({"topics": topic}))
  
