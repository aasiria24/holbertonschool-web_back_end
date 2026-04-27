# Pagination

A Python project that demonstrates different pagination techniques using a dataset of popular baby names.

## Learning Objectives

- How to paginate a dataset with simple `page` and `page_size` parameters
- How to paginate a dataset with hypermedia metadata
- How to paginate in a deletion-resilient manner

## Requirements

- Python 3.9 on Ubuntu 20.04 LTS
- `pycodestyle` style (version 2.5.*)

## Dataset

`Popular_Baby_Names.csv` — a CSV file containing baby name records with the following columns:
`Year of Birth`, `Gender`, `Ethnicity`, `Child's First Name`, `Count`, `Rank`

## Files

| File | Description |
|------|-------------|
| `0-simple_helper_function.py` | Helper function `index_range` that returns start and end indexes for a given page and page size |
| `1-simple_pagination.py` | `Server` class with `get_page` method for simple pagination |
| `2-hypermedia_pagination.py` | `Server` class with `get_hyper` method that returns pagination metadata |
| `3-hypermedia_del_pagination.py` | `Server` class with `get_hyper_index` method for deletion-resilient pagination |

## Usage

```python
# Simple pagination
from 1-simple_pagination import Server
server = Server()
print(server.get_page(1, 10))

# Hypermedia pagination
from 2-hypermedia_pagination import Server
server = Server()
print(server.get_hyper(1, 10))

# Deletion-resilient pagination
from 3-hypermedia_del_pagination import Server
server = Server()
print(server.get_hyper_index(0, 10))
```

## Author

**Amaal Asiri**, Holberton School project — Web Back End
