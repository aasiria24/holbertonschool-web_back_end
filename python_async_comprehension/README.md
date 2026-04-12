# Python - Async Comprehension

## Description

This project covers asynchronous generators and async comprehensions in Python 3. It explores how to write async generators, collect data using async comprehensions, and measure the runtime of parallel coroutines using `asyncio.gather`.

## Learning Objectives

At the end of this project, you should be able to explain:

- How to write an asynchronous generator
- How to use async comprehensions
- How to type-annotate generators

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
| `0-async_generator.py` | Async generator `async_generator` that yields 10 random floats between 0 and 10 |
| `1-async_comprehension.py` | Coroutine `async_comprehension` that collects 10 random numbers using async comprehension |
| `2-measure_runtime.py` | Coroutine `measure_runtime` that runs `async_comprehension` four times in parallel and returns total runtime |

## Key Concept

Running `async_comprehension` four times in parallel with `asyncio.gather` takes ~10 seconds total — not ~40 seconds — because all four coroutines run **concurrently**, sharing the same `asyncio.sleep` wait time.

## Usage

```bash
# Example: run async_generator
python3 -c "
import asyncio
async_generator = __import__('0-async_generator').async_generator
async def main():
    async for i in async_generator():
        print(i)
asyncio.run(main())
"

# Example: run async_comprehension
python3 -c "
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension
asyncio.run(async_comprehension())
"

# Example: measure runtime
python3 -c "
import asyncio
measure_runtime = __import__('2-measure_runtime').measure_runtime
print(asyncio.run(measure_runtime()))
"
```

## Author

**Amaal Asiri**, Holberton School Student
