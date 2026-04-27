#!/usr/bin/env python3
"""Module that provides hypermedia pagination for a dataset of baby names."""
import csv
import math
from typing import Dict, List, Optional, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
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


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance with no cached dataset."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset, loading from CSV file if necessary."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return the appropriate page of the dataset for pagination params.

        Args:
            page: The page number to retrieve (1-indexed, default is 1).
            page_size: The number of items per page (default is 10).

        Returns:
            A list of rows corresponding to the requested page, or an empty
            list if the pagination parameters are out of range for the dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        dataset = self.dataset()

        if start >= len(dataset):
            return []

        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Return a dictionary containing hypermedia pagination metadata.

        Args:
            page: The page number to retrieve (1-indexed, default is 1).
            page_size: The number of items per page (default is 10).

        Returns:
            A dictionary with keys: page_size, page, data, next_page,
            prev_page, and total_pages describing the current pagination state.
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages,
        }
