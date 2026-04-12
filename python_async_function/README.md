# Python - Async Function

## Description

This project covers asynchronous programming in Python 3 using `async` and `await` syntax. It explores how to execute async programs with `asyncio`, run concurrent coroutines, create `asyncio` tasks, and use the `random` module.

## Learning Objectives

At the end of this project, you should be able to explain:

- `async` and `await` syntax
- How to execute an async program with `asyncio`
- How to run concurrent coroutines
- How to create `asyncio` tasks
- How to use the `random` module

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- All files are interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- All files should end with a new line
- The first line of all files should be exactly `#!/usr/bin/env python3`
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `pycodestyle` style (version 2.5.x)
- All files must be executable
- All functions and coroutines must be type-annotated
- All modules and functions should have proper documentation

## Files

| File | Description |
|------|-------------|
| `0-basic_async_syntax.py` | Async coroutine `wait_random` that waits for a random delay and returns it |
| `1-concurrent_coroutines.py` | Async routine `wait_n` that spawns `wait_random` n times concurrently |
| `2-measure_runtime.py` | Function `measure_time` that measures the total execution time for `wait_n` |
| `3-tasks.py` | Function `task_wait_random` that returns an `asyncio.Task` |
| `4-tasks.py` | Async routine `task_wait_n` that uses `task_wait_random` instead of `wait_random` |

## Usage

```bash
# Run any file directly
./0-basic_async_syntax.py

# Example: run wait_random
python3 -c "
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random
print(asyncio.run(wait_random(5)))
"

# Example: run wait_n
python3 -c "
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n
print(asyncio.run(wait_n(5, 5)))
"

# Example: measure runtime
python3 -c "
measure_time = __import__('2-measure_runtime').measure_time
print(measure_time(5, 9))
"
```

## Author

**Amaal Asiri**, Holberton School Student
