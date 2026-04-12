# Python - Variable Annotations

## Description

This project covers type annotations in Python 3, focusing on how to use them to specify function signatures and variable types. It also explores duck typing and how to validate code using `mypy`.

## Learning Objectives

At the end of this project, you should be able to explain:

- Type annotations in Python 3
- How to use type annotations to specify function signatures and variable types
- Duck typing
- How to validate your code with `mypy`

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- All files are interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- All files should end with a new line
- The first line of all files should be exactly `#!/usr/bin/env python3`
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `pycodestyle` style (version 2.5.)
- All files must be executable
- All modules, classes, and functions should have proper documentation

## Files

| File | Description |
|------|-------------|
| `0-add.py` | Type-annotated function `add` that takes two floats and returns their sum |
| `1-concat.py` | Type-annotated function `concat` that takes two strings and returns their concatenation |
| `2-floor.py` | Type-annotated function `floor` that takes a float and returns its floor as an int |
| `3-to_str.py` | Type-annotated function `to_str` that takes a float and returns its string representation |
| `4-define_variables.py` | Defines and annotates variables with specific types and values |
| `5-sum_list.py` | Type-annotated function `sum_list` that takes a list of floats and returns their sum |
| `6-sum_mixed_list.py` | Type-annotated function `sum_mixed_list` that takes a list of ints and floats and returns their sum |
| `7-to_kv.py` | Type-annotated function `to_kv` that returns a tuple with a string and the square of a number |
| `8-make_multiplier.py` | Type-annotated function `make_multiplier` that returns a multiplier function |
| `9-element_length.py` | Type-annotated function `element_length` that returns elements with their lengths |
| `100-safe_first_element.py` | Duck-typed function `safe_first_element` that safely returns the first element of a sequence |
| `101-safely_get_value.py` | Function `safely_get_value` using `TypeVar` to safely get a value from a mapping |
| `102-type_checking.py` | Fixed and validated code using `mypy` for the `zoom_array` function |

## Usage

```bash
# Run any file directly
./0-add.py

# Check type annotations
python3 -c 'print(__import__("0-add").add.__annotations__)'

# Validate with mypy
mypy 102-type_checking.py
```

## Author

**Amaal Asiri**, Holberton School Student.
