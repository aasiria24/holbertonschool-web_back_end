#!/usr/bin/env python3
"""Deletion-resilient hypermedia pagination for a dataset of popular baby names."""

import csv
import math
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance with no cached dataset."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset, loading from CSV file if necessary."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Return the dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a deletion-resilient hypermedia pagination dictionary.

        Ensures that even if rows are deleted between queries, the user
        does not miss any items when navigating to the next page.

        Args:
            index: The current start index of the page (default is None).
            page_size: The number of items per page (default is 10).

        Returns:
            A dictionary with keys: index, next_index, page_size, and data,
            reflecting the current page state resilient to row deletions.
        """
        indexed = self.indexed_dataset()
        assert index is not None and 0 <= index < len(self.dataset())

        data = []
        current_index = index

        while len(data) < page_size:
            if current_index in indexed:
                data.append(indexed[current_index])
            current_index += 1
            if current_index >= len(self.dataset()) + page_size:
                break

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': current_index,
        }
