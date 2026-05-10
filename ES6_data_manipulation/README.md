# ES6 Data Manipulation

This project contains a series of exercises focused on manipulating data structures in JavaScript using ES6 features. The goal is to practice using typed arrays, Sets, Maps, and various array methods like `map`, `filter`, and `reduce`.

## Requirements

*   **Operating System:** Ubuntu 20.04 LTS
*   **Node.js version:** 20.x.x
*   **Package Manager:** npm 9.x.x
*   **Linter:** ESLint (Airbnb configuration)
*   **Testing Framework:** Jest
*   **Compiler:** Babel

## Setup

1.  Install the project dependencies:
    ```bash
    npm install
    
Run the full test suite (lint and jest):

Bash

npm run full-test


## Project Structure

| Task | File | Description |
| :--- | :--- | :--- |
| 0 | `0-get_list_students.js` | Returns an array of student objects with `id`, `firstName`, and `location`. |
| 1 | `1-get_list_student_ids.js` | Returns an array of IDs from a list of objects using `map`. |
| 2 | `2-get_students_by_loc.js` | Returns an array of students in a specific city using `filter`. |
| 3 | `3-get_ids_sum.js` | Calculates the sum of all student IDs using `reduce`. |
| 4 | `4-update_grade_by_city.js` | Updates student grades for a specific city using `filter` and `map`. |
| 5 | `5-typed_arrays.js` | Creates an `Int8` value at a specific position in an `ArrayBuffer`. |
| 6 | `6-set.js` | Converts an array into a `Set`. |
| 7 | `7-has_array_values.js` | Checks if all elements in an array exist within a `Set`. |
| 8 | `8-clean_set.js` | Returns a string of `Set` values that start with a specific string. |
| 9 | `9-groceries_list.js` | Returns a `Map` of grocery items and their quantities. |
| 10 | `10-update_uniq_items.js` | Updates quantities in a `Map` where the initial value is 1. |
| 11 | `100-weak.js` | Tracks API endpoint load using a `WeakMap`. |

## Key Concepts Covered

*   **Array Methods:** Practical application of `map`, `filter`, and `reduce` for data transformation.
*   **Typed Arrays:** Working with `ArrayBuffer` and `DataView` for low-level memory manipulation.
*   **Modern Collections:** Utilizing `Set`, `Map`, and `WeakMap` for efficient data storage and tracking.
*   **Error Handling:** Implementing custom error messages and input validation.

## Author
*   **Amaal Asiri** - Holberton School Student
