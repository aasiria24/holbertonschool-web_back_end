#!/usr/bin/env python3
"""Module that provides a function to return students by average score."""
from typing import List


def top_students(mongo_collection) -> List:
    """Return all students sorted by average score in descending order.

    Computes the average score from each student's topics list and
    returns all students with their averageScore, sorted from highest
    to lowest.

    Args:
        mongo_collection: the pymongo collection object to query.

    Returns:
        A list of student documents sorted by averageScore descending,
        each containing an additional averageScore key with their mean.
    """
    return list(mongo_collection.aggregate([
        {
            "$project": {
                "name": 1,
                "topics": 1,
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            "$sort": {"averageScore": -1}
        }
    ]))
