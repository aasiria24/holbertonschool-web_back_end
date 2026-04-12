#!/usr/bin/env python3
"""Module that provides a function to zoom in on
an array by repeating elements."""
from typing import Tuple, List


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """Take a tuple and a factor, return a list with
    each element repeated factor times."""
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
