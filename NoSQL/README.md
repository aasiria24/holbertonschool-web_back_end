# NoSQL

A project exploring NoSQL databases using MongoDB and PyMongo.

## Learning Objectives

- What NoSQL means and how it differs from SQL
- What ACID is
- What document storage is
- Types of NoSQL databases and their benefits
- How to query, insert, update, and delete data in MongoDB
- How to use MongoDB with Python via PyMongo

## Requirements

- Ubuntu 20.04 LTS
- MongoDB 4.4
- Python 3.9 / PyMongo 4.8.0
- pycodestyle 2.5.*

## Files

### MongoDB Scripts

| File | Description |
|------|-------------|
| `0-list_databases` | Lists all databases |
| `1-use_or_create_database` | Creates or uses the database `my_db` |
| `2-insert` | Inserts a document in the collection `school` |
| `3-all` | Lists all documents in the collection `school` |
| `4-match` | Lists documents with `name="Holberton school"` |
| `5-count` | Displays the number of documents in `school` |
| `6-update` | Adds an `address` attribute to matching documents |
| `7-delete` | Deletes all documents with `name="Holberton school"` |
| `100-find` | Lists documents with `name` starting by `Holberton` |

### Python Scripts

| File | Description |
|------|-------------|
| `8-all.py` | Lists all documents in a collection |
| `9-insert_school.py` | Inserts a new document based on kwargs |
| `10-update_topics.py` | Updates topics of a school document by name |
| `11-schools_by_topic.py` | Returns schools having a specific topic |
| `12-log_stats.py` | Displays stats about Nginx logs in MongoDB |
| `101-students.py` | Returns students sorted by average score |
| `102-log_stats.py` | Improves `12-log_stats.py` with top 10 IPs |

## Usage

```bash
# Run a MongoDB script
cat 0-list_databases | mongo

# Run a Python script
./8-all.py
```

## Author

**Amaal Asiri**, Holberton School — Web Back End
