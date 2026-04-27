#!/usr/bin/env python3
"""Module that provides a helper function for pagination index calculation."""


def index_range(page: int, page_size: int) -> tuple:
    """Return a tuple containing the start and end indexes for pagination.

    Args:
        page: The page number (1-indexed, so the first page is page 1).
        page_size: The number of items per page.

    Returns:
        A tuple (start_index, end_index) representing the range of indexes
        to return from a list for the given pagination parameters.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
