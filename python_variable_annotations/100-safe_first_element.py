#!/usr/bin/env python3
"""Module that provides a function to safely
return the first element of a sequence."""
from typing import Sequence, Any, Optional


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """Return the first element of a sequence if it exists,
    otherwise return None."""
    if lst:
        return lst[0]
    else:
        return None
