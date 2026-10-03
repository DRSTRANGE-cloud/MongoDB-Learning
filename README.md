# MongoDB Learning

A hands-on MongoDB learning repository focused on understanding MongoDB fundamentals, CRUD operations, Mongoose, and integrating MongoDB with Node.js and Express.

This repository is maintained as a **personal learning and reference guide**. The goal is not only to store code, but to keep practical examples and concepts that can be revisited while building backend applications.

---

## Purpose

The purpose of this repository is to build a practical understanding of MongoDB from the fundamentals to backend integration.

Instead of treating MongoDB as only a collection of commands, this repository focuses on understanding:

* How MongoDB stores and retrieves data
* How CRUD operations work
* How MongoDB fits into a Node.js backend
* How Mongoose provides a structured way to work with MongoDB
* How schemas and models are used in application development
* How Express and EJS can work with backend data

---

## Learning Roadmap

```text
MongoDB Fundamentals
        ↓
Databases & Collections
        ↓
Documents & BSON
        ↓
CRUD Operations
        ↓
Queries & Updates
        ↓
Node.js Integration
        ↓
Mongoose
        ↓
Schemas & Models
        ↓
Express + MongoDB
        ↓
Backend Application Development
```

The repository will grow along this path as new concepts are learned and implemented.

---

## Topics Covered

### 1. MongoDB Fundamentals

Core concepts to understand before working with application code:

* NoSQL database concepts
* MongoDB databases
* Collections
* Documents
* Fields
* BSON
* Document-oriented data modeling
* MongoDB shell/database commands

### 2. CRUD Operations

CRUD represents the four fundamental database operations:

| Operation | Meaning       | MongoDB Example |
| --------- | ------------- | --------------- |
| Create    | Insert data   | `insertOne()`   |
| Read      | Retrieve data | `find()`        |
| Update    | Modify data   | `updateOne()`   |
| Delete    | Remove data   | `deleteOne()`   |

The repository contains practical CRUD examples using a `users` collection.

Example:

```javascript
db.users.find({ name: "Jane Smith" });

db.users.updateOne(
  { name: "John Doe" },
  { $set: { name: "Deepak Yadav" } }
);

db.users.deleteOne({ name: "Deepak Yadav" });
```

The important concept is understanding the structure of a MongoDB operation:

```text
Collection
   ↓
Filter / Query
   ↓
Operation
   ↓
Document(s)
```

---

## 3. MongoDB and Node.js

MongoDB becomes much more useful when integrated into backend applications.

This repository uses Node.js alongside MongoDB to understand how an application can:

```text
Client
  ↓
Express Server
  ↓
Application Logic
  ↓
MongoDB
  ↓
Data
```

The root Node.js example also demonstrates the use of Express and EJS for server-side rendering.

---

## 4. Mongoose

Mongoose is used in this repository as an Object Data Modeling (ODM) library for MongoDB.

It helps define application-level structure around MongoDB documents using:

* Schemas
* Models
* Documents
* Validation
* Database operations

### Basic relationship

```text
MongoDB
   ↑
Mongoose
   ↑
Node.js Application
```

### Schema

A schema describes the structure expected by the application.

Example from this repository:

```javascript
const TodoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean,
});
```

### Model

A model is created from a schema and provides an interface for interacting with documents.

```javascript
export const Todo = mongoose.model("Todo", TodoSchema);
```

### Document

A document represents an actual record stored in MongoDB.

```javascript
const todo = new Todo({
  name: "My First Todo",
  desc: "Hello Todo",
  isDone: true,
});

await todo.save();
```

### Remember

```text
Schema  → structure
Model   → interface
Document → actual data
```

This distinction is important when working with Mongoose in real backend applications.

---

## 5. Connecting MongoDB with Express

The Mongoose example demonstrates a basic connection between an Express application and a local MongoDB instance.

```javascript
await mongoose.connect("mongodb://localhost:27017/todoApp");
```

The flow is:

```text
Express Application
       ↓
    Mongoose
       ↓
    MongoDB
       ↓
   todoApp
```

This is the foundation for larger backend systems where routes perform database operations.

---

## Repository Structure

```text
MongoDB-Learning/
│
├── CRUD Operations/
│   └── crud.mongodb.js
│
├── Exercise-1/
│   ├── index.js
│   ├── gif/
│   ├── pdf/
│   └── xlsx/
│
├── Exercise-2/
│   ├── index.js
│   ├── models/
│   │   └── employee.js
│   └── views/
│
├── Mongoose Intallation/
│   ├── index.js
│   ├── models/
│   │   └── Todo.js
│   ├── package.json
│   └── package-lock.json
│
├── public/
├── views/
├── main.js
├── package-lock.json
├── .gitignore
└── MongoDB Handbook.pdf
```

> Note: `Mongoose Intallation` is the directory name currently used in the repository.

---

## Folder Guide

### `CRUD Operations/`

Contains MongoDB shell practice for creating collections and performing CRUD operations.

**Use this folder when revising:**

* `createCollection()`
* `insertOne()`
* `insertMany()`
* `find()`
* `updateOne()`
* `deleteOne()`

---

### `Mongoose Intallation/`

Contains the initial Mongoose integration with a Node.js application.

Key concepts:

```text
mongoose.connect()
Schema
Model
Document
save()
```

This folder represents the transition from writing MongoDB commands directly to using MongoDB through application code.

---

### `Exercise-1/`

Contains a Node.js file-system exercise that organizes files based on their extensions.

This is primarily a JavaScript/Node.js practice exercise and is kept here as part of the broader backend learning journey.

---

### `Exercise-2/`

Contains another Node.js/Mongoose-oriented exercise with:

* Application entry point
* Models
* Views
* Package configuration

The `models/employee.js` file demonstrates separating data-model definitions from application logic.

---

### `public/` and `views/`

These directories belong to the Node.js/Express/EJS side of the learning process.

They help demonstrate the relationship between:

```text
Backend Route
     ↓
Application Data
     ↓
EJS Template
     ↓
Rendered HTML
```

---

## Core Concepts to Remember

### MongoDB vs SQL

MongoDB is a document-oriented NoSQL database.

A simplified comparison:

```text
SQL                         MongoDB
------------------------------------------------
Database                    Database
Table                       Collection
Row                         Document
Column                      Field
Primary Key                 _id
```

The models are conceptually different, so MongoDB should not be approached as SQL with different syntax.

---

## Query Thinking

When writing MongoDB queries, think in this order:

```text
1. Which collection?
2. Which documents?
3. What filter?
4. What operation?
5. What fields should change or return?
```

Example:

```javascript
db.users.updateOne(
  { name: "John Doe" },
  { $set: { name: "Deepak Yadav" } }
);
```

Read it as:

```text
users
 ↓
find John Doe
 ↓
update one document
 ↓
set name
```

This mental model becomes useful when writing more complex queries.

---

## Mongoose Mental Model

A useful way to remember the Mongoose workflow:

```text
Connect
  ↓
Schema
  ↓
Model
  ↓
Document
  ↓
Query / Save / Update / Delete
```

Example:

```javascript
await mongoose.connect(MONGO_URI);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

const user = new User({
  name: "Deepak",
  email: "example@email.com",
});

await user.save();
```

---

## Environment Variables

For real projects, database credentials should not be hard-coded.

Use a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/myDatabase
```

or for MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

The `.env` file should remain ignored by Git.

For shared code, use:

```text
.env.example
```

instead of committing credentials.

---

## Running the Node.js Examples

Install dependencies:

```bash
npm install
```

Run a Node.js example:

```bash
node main.js
```

For individual learning folders, first enter the relevant directory and install its dependencies:

```bash
cd "Mongoose Intallation"
npm install
```

Then run the entry file:

```bash
node index.js
```

Make sure MongoDB is running locally when an example uses:

```text
mongodb://localhost:27017/
```

---

## Useful MongoDB Commands

### Start with a database

```javascript
use myDatabase
```

### Create a collection

```javascript
db.createCollection("users")
```

### Insert one document

```javascript
db.users.insertOne({
  name: "Deepak",
  age: 20
})
```

### Find documents

```javascript
db.users.find()
```

### Find matching documents

```javascript
db.users.find({ age: 20 })
```

### Update a document

```javascript
db.users.updateOne(
  { name: "Deepak" },
  { $set: { age: 21 } }
)
```

### Delete a document

```javascript
db.users.deleteOne({
  name: "Deepak"
})
```

---

## Important Distinction: MongoDB Driver vs Mongoose

These are related but not the same thing.

### MongoDB Driver

The official Node.js driver allows the application to communicate directly with MongoDB.

```text
Node.js
   ↓
MongoDB Driver
   ↓
MongoDB
```

### Mongoose

Mongoose adds an ODM layer with schemas, models, validation, middleware, and other application-level abstractions.

```text
Node.js
   ↓
Mongoose
   ↓
MongoDB Driver
   ↓
MongoDB
```

Understanding this distinction helps when choosing how to structure a Node.js backend.

---

## Learning Notes

This section is intentionally kept for future additions.

When learning a new MongoDB concept, record it using:

```text
Concept:
What it means:
Why it is used:
Syntax:
Small example:
Common mistake:
Where I used it:
```

This makes the repository useful as a revision guide rather than simply a collection of copied commands.

---

## Future Topics

The repository can gradually expand into the following areas:

```text
MongoDB Fundamentals
      ↓
CRUD
      ↓
Query Operators
      ↓
Projection
      ↓
Sorting
      ↓
Pagination
      ↓
Indexes
      ↓
Aggregation Pipeline
      ↓
Schema Design
      ↓
Embedding vs Referencing
      ↓
Transactions
      ↓
Validation
      ↓
Mongoose
      ↓
Express + MongoDB APIs
      ↓
Authentication & Authorization
      ↓
Production Database Practices
```

Planned areas include:

* Query operators
* Logical and comparison operators
* Projection
* Sorting and pagination
* Indexes
* Aggregation pipeline
* Embedded documents
* References and relationships
* Data modeling
* Transactions
* Mongoose validation
* Mongoose middleware
* REST API integration
* MongoDB Atlas
* Performance and optimization

---

## Reference Material

The repository includes:

**MongoDB Handbook.pdf**

This can be used alongside the practical examples when revising concepts.

The preferred learning cycle is:

```text
Read concept
    ↓
Understand why it exists
    ↓
Write the command/code
    ↓
Run it
    ↓
Observe the result
    ↓
Modify the example
    ↓
Record the lesson
```
---

## Tech Stack

* **MongoDB**
* **Mongoose**
* **Node.js**
* **Express.js**
* **EJS**
* **JavaScript**
* **npm**

---

## Repository Status

This is an evolving personal learning repository.

New examples, notes, experiments, and backend concepts will be added as MongoDB knowledge develops.

The structure may change over time as the learning material becomes more organized.

---

## Author

**Deepak Yadav**

Computer Engineering Student
Software Engineering | Backend | Full-Stack | AI/ML

---

## License

This repository is intended primarily for personal learning and reference.