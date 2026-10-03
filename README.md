# 🍃 MongoDB Learning

> **A hands-on MongoDB learning repository focused on understanding databases, CRUD, data modeling, Mongoose, and backend integration with Node.js and Express.**

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-Learning-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Web_Framework-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Learning-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

---

## 🧠 About This Repository

This is my **personal MongoDB learning lab and long-term reference guide**.

The purpose is not simply to collect MongoDB commands. The goal is to understand **why MongoDB works the way it does**, how data is modeled, and how a database becomes part of a real backend application.

I use this repository to:

* 📚 Learn MongoDB concepts
* 💻 Implement concepts through code
* 🧪 Experiment with database operations
* 🔗 Connect MongoDB with Node.js
* 🧩 Understand Mongoose and ODM concepts
* 🏗️ Practice backend architecture
* 📝 Keep revision notes and mental models
* 🔄 Return to old concepts when building future projects

> **Learn → Implement → Break → Debug → Understand → Document → Reuse**

---

# 🗺️ Learning Roadmap

```text
                    ┌─────────────────────┐
                    │  MongoDB Fundamentals │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Databases & Collections │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Documents & BSON    │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │   CRUD Operations   │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Queries & Operators │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Node.js Integration │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │      Mongoose       │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Schemas & Models    │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Express + MongoDB   │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Backend Applications│
                    └─────────────────────┘
```

### 📈 Learning Progression

| Stage | Area                    |    Status    |
| :---: | ----------------------- | :----------: |
|   01  | MongoDB Fundamentals    |  🟢 Learning |
|   02  | Databases & Collections |  🟢 Learning |
|   03  | Documents & BSON        |  🟢 Learning |
|   04  | CRUD Operations         | 🟢 Practiced |
|   05  | Queries & Updates       | 🟢 Practiced |
|   06  | Node.js Integration     | 🟢 Practiced |
|   07  | Mongoose                | 🟢 Practiced |
|   08  | Schemas & Models        | 🟢 Practiced |
|   09  | Express + MongoDB       | 🟡 Expanding |
|   10  | Aggregation             |    🔵 Next   |
|   11  | Indexing & Performance  |    🔵 Next   |
|   12  | Advanced Data Modeling  |    🔵 Next   |

---

# 🌱 1. MongoDB Fundamentals

## What is MongoDB?

MongoDB is a **document-oriented NoSQL database**.

Instead of organizing information primarily into rows and tables like a relational database, MongoDB stores data as **documents inside collections**.

```text
MongoDB
│
├── Database
│    │
│    ├── Collection
│    │     │
│    │     ├── Document
│    │     ├── Document
│    │     └── Document
│    │
│    └── Collection
│
└── Collection
```

### 🧩 Core Terminology

| MongoDB    | Concept                                      |
| ---------- | -------------------------------------------- |
| Database   | Container for collections                    |
| Collection | Group of documents                           |
| Document   | Individual data record                       |
| Field      | Key/value inside a document                  |
| `_id`      | Unique document identifier                   |
| BSON       | Binary representation of JSON-like documents |

### 🧠 Mental Model

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Fields
```

Remember:

> **Database contains Collections → Collections contain Documents → Documents contain Fields.**

---

# ✍️ 2. CRUD Operations

CRUD is the foundation of database interaction.

```text
       CRUD
        │
 ┌──────┼──────┐
 ↓      ↓      ↓
CREATE  READ  UPDATE  DELETE
```

| Operation | Purpose       | MongoDB       |
| --------- | ------------- | ------------- |
| 🟢 Create | Insert data   | `insertOne()` |
| 🔵 Read   | Retrieve data | `find()`      |
| 🟡 Update | Modify data   | `updateOne()` |
| 🔴 Delete | Remove data   | `deleteOne()` |

### Example

```javascript
db.users.find({
  name: "Jane Smith"
});

db.users.updateOne(
  { name: "John Doe" },
  { $set: { name: "Deepak Yadav" } }
);

db.users.deleteOne({
  name: "Deepak Yadav"
});
```

### 🔍 Query Mental Model

Whenever writing a MongoDB operation, think:

```text
1️⃣ Which collection?
       ↓
2️⃣ Which documents?
       ↓
3️⃣ What filter?
       ↓
4️⃣ What operation?
       ↓
5️⃣ What should change / return?
```

This mental model becomes extremely useful as queries become more complex.

---

# 🔎 3. MongoDB Querying

The next step after CRUD is learning how to **select exactly the data you need**.

Important areas:

### Comparison Operators

```javascript
$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
```

Example:

```javascript
db.users.find({
  age: { $gte: 18 }
});
```

### Logical Operators

```javascript
$and
$or
$not
$nor
```

Example:

```javascript
db.users.find({
  $or: [
    { age: 18 },
    { age: 21 }
  ]
});
```

### Future Query Concepts

```text
Filters
  ↓
Comparison Operators
  ↓
Logical Operators
  ↓
Projection
  ↓
Sorting
  ↓
Pagination
  ↓
Complex Queries
```

---

# 🧱 4. Data Modeling

MongoDB's flexibility does not mean that data modeling becomes unimportant.

The key question is:

> **How should my application structure its data?**

Important concepts:

* Embedded documents
* Referenced documents
* One-to-one relationships
* One-to-many relationships
* Many-to-many relationships
* Denormalization
* Data duplication
* Access-pattern-driven design

### Embedding vs Referencing

```text
Embedding
─────────

User
 ├── name
 ├── email
 └── address
      ├── city
      └── country
```

versus:

```text
Referencing
───────────

User
 ├── name
 ├── email
 └── addressId ──────→ Address
                         ├── city
                         └── country
```

The correct choice depends heavily on **how the application reads and writes the data**.

---

# 🧩 5. Mongoose

Mongoose introduces an application-level structure on top of MongoDB.

```text
┌───────────────────────┐
│     Node.js App       │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│       Mongoose        │
│                       │
│ Schema → Model → Doc  │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│       MongoDB         │
└───────────────────────┘
```

## Schema

A schema defines the structure expected by the application.

```javascript
const TodoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean,
});
```

## Model

A model provides the application interface for interacting with documents.

```javascript
const Todo = mongoose.model(
  "Todo",
  TodoSchema
);
```

## Document

A document represents an actual record.

```javascript
const todo = new Todo({
  name: "My First Todo",
  desc: "Hello Todo",
  isDone: true,
});

await todo.save();
```

### 🧠 Remember

```text
Schema
  ↓
Defines structure

Model
  ↓
Provides interface

Document
  ↓
Represents actual data
```

---

# 🔌 6. Connecting MongoDB to Node.js

The application communicates with MongoDB through a database connection.

```javascript
await mongoose.connect(
  "mongodb://localhost:27017/todoApp"
);
```

### Architecture

```text
        Client
          │
          ▼
   ┌──────────────┐
   │   Express    │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │ Node.js Logic│
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Mongoose   │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   MongoDB    │
   └──────────────┘
```

This is the foundation of many Node.js backend applications.

---

# 🌐 7. Express + MongoDB + EJS

The repository also explores the relationship between Express routes and rendered views.

```text
Request
   ↓
Express Route
   ↓
Application Logic
   ↓
Database
   ↓
Data
   ↓
EJS Template
   ↓
HTML Response
```

### Example architecture

```text
Browser
   │
   │ HTTP Request
   ▼
Express
   │
   ▼
Controller / Logic
   │
   ▼
MongoDB
   │
   ▼
Data
   │
   ▼
EJS
   │
   ▼
Rendered HTML
```

This helps connect database concepts with actual web development.

---

# 🗂️ Repository Structure

```text
MongoDB-Learning/
│
├── 📁 CRUD Operations/
│   └── crud.mongodb.js
│
├── 📁 Exercise-1/
│   ├── index.js
│   ├── 📁 gif/
│   ├── 📁 pdf/
│   └── 📁 xlsx/
│
├── 📁 Exercise-2/
│   ├── index.js
│   ├── 📁 models/
│   │   └── employee.js
│   └── 📁 views/
│
├── 📁 Mongoose Intallation/
│   ├── index.js
│   ├── 📁 models/
│   │   └── Todo.js
│   ├── package.json
│   └── package-lock.json
│
├── 📁 public/
├── 📁 views/
│
├── 📄 main.js
├── 📄 package-lock.json
├── 📄 .gitignore
└── 📕 MongoDB Handbook.pdf
```

> ⚠️ `Mongoose Intallation` is the directory name currently used in the repository.

---

# 🧪 Practical Learning Labs

## `CRUD Operations/`

🎯 **Focus:** MongoDB shell/database operations

Practice includes:

```text
createCollection()
insertOne()
insertMany()
find()
updateOne()
deleteOne()
```

---

## `Mongoose Intallation/`

🎯 **Focus:** MongoDB + Node.js + Mongoose

Practice includes:

```text
mongoose.connect()
        ↓
Schema
        ↓
Model
        ↓
Document
        ↓
save()
```

This represents the transition from:

> **Database commands → Application-level database programming**

---

## `Exercise-1/`

🎯 **Focus:** Node.js file-system programming

The exercise works with files and organizes them according to file extensions.

Although it is not a MongoDB-specific exercise, it belongs to the broader Node.js/backend learning journey.

---

## `Exercise-2/`

🎯 **Focus:** Node.js + Mongoose-oriented application structure

Includes:

* Application entry point
* Models
* Views
* Package configuration

The `employee` model demonstrates separating **data structure from application logic**.

---

# 🆚 MongoDB vs SQL

A useful mental translation:

```text
SQL                         MongoDB
────────────────────────────────────────
Database              →     Database
Table                 →     Collection
Row                   →     Document
Column                →     Field
Primary Key           →     _id
JOIN                  →     Embedding / Referencing
Schema                →     Flexible document structure
```

⚠️ Do not think:

> "MongoDB is SQL with different syntax."

Instead:

> **MongoDB uses a different data model and encourages different modeling decisions.**

---

# ⚡ MongoDB Driver vs Mongoose

These concepts are related but should not be confused.

### MongoDB Driver

```text
Node.js
   ↓
MongoDB Driver
   ↓
MongoDB
```

The driver provides direct programmatic communication with MongoDB.

### Mongoose

```text
Node.js
   ↓
Mongoose
   ↓
MongoDB Driver
   ↓
MongoDB
```

Mongoose adds an ODM layer with concepts such as:

* Schemas
* Models
* Validation
* Middleware
* Application-level structure

### 🧠 Quick Rule

```text
Driver  → Direct database interaction
Mongoose → Structured application-level modeling
```

---

# 🔐 Environment Variables

Never commit database credentials.

Use:

```env
MONGO_URI=mongodb://localhost:27017/myDatabase
```

For MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

Keep:

```text
.env
```

out of Git.

Instead commit:

```text
.env.example
```

with placeholder values.

---

# 🛠️ Running the Examples

Install dependencies:

```bash
npm install
```

Run the root application:

```bash
node main.js
```

For the Mongoose example:

```bash
cd "Mongoose Intallation"
npm install
node index.js
```

Make sure MongoDB is running locally when using:

```text
mongodb://localhost:27017/
```

---

# 📖 Quick MongoDB Reference

### Select database

```javascript
use myDatabase
```

### Create collection

```javascript
db.createCollection("users")
```

### Insert

```javascript
db.users.insertOne({
  name: "Deepak",
  age: 20
})
```

### Read

```javascript
db.users.find()
```

### Filter

```javascript
db.users.find({
  age: 20
})
```

### Update

```javascript
db.users.updateOne(
  { name: "Deepak" },
  { $set: { age: 21 } }
)
```

### Delete

```javascript
db.users.deleteOne({
  name: "Deepak"
})
```

---

# 🧠 My MongoDB Mental Models

These are the concepts I want to remember rather than memorizing syntax.

### Model 1 — Database Structure

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Field
```

### Model 2 — CRUD

```text
CREATE → READ → UPDATE → DELETE
```

### Model 3 — Mongoose

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

### Model 4 — Backend

```text
Client
  ↓
Express
  ↓
Application Logic
  ↓
Mongoose
  ↓
MongoDB
```

### Model 5 — Query Thinking

```text
Collection
     ↓
Filter
     ↓
Operation
     ↓
Result
```

---

# 📚 Learning Method

For every new concept, follow this loop:

```text
        ┌─────────────┐
        │  📖 Learn   │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ 🧠 Understand│
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ 💻 Implement│
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ 🧪 Experiment│
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ 🐛 Debug    │
        └──────┬──────┘
               ↓
        ┌─────────────┐
        │ 📝 Document │
        └──────┬──────┘
               │
               └──────────────→ 🔁 Repeat
```

The objective is:

> **Don't just remember the syntax. Understand the system behind the syntax.**

---

# 🚀 Future Learning Path

The repository will gradually expand toward production-level MongoDB knowledge.

```text
                    MongoDB
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Queries        Modeling       Mongoose
        │              │              │
        ↓              ↓              ↓
   Operators       Relations       Validation
        │              │              │
        ↓              ↓              ↓
  Projection      Embedding      Middleware
        │          vs Reference       │
        ↓              │              ↓
    Sorting            │          Transactions
        │              │
        ↓              ↓
   Pagination      Data Design
        │
        └──────────────┬──────────────┘
                       ↓
                 Aggregation
                       ↓
                    Indexes
                       ↓
                 Performance
                       ↓
                MongoDB Atlas
                       ↓
                Production APIs
```

### 🔭 Topics to Explore

#### 🔎 Querying

* Query operators
* Comparison operators
* Logical operators
* Array queries
* Nested document queries
* Projection
* Sorting
* Pagination

#### 📊 Aggregation

* Aggregation pipeline
* `$match`
* `$group`
* `$project`
* `$sort`
* `$lookup`
* `$unwind`

#### 🧱 Data Modeling

* Embedding
* Referencing
* One-to-one
* One-to-many
* Many-to-many
* Denormalization
* Access-pattern-driven design

#### ⚡ Performance

* Indexes
* Compound indexes
* Query optimization
* Explain plans
* Read/write performance

#### 🔐 Production

* MongoDB Atlas
* Authentication
* Authorization
* Transactions
* Backups
* Security
* Connection management
* Environment configuration

---

# 📕 Reference Material

The repository includes:

**MongoDB Handbook.pdf**

Use the handbook together with the practical examples.

### Recommended workflow

```text
📕 Read
 ↓
🧠 Understand
 ↓
💻 Code
 ↓
🧪 Test
 ↓
🔍 Inspect result
 ↓
🔧 Modify
 ↓
📝 Record learning
```

---

# 📝 Personal Learning Notes

For every new MongoDB concept, document it using:

```text
Concept:
────────────────────────────

What is it?

Why does it exist?

When should I use it?

How does it work?

Basic syntax:

Small example:

Common mistakes:

Performance considerations:

Where did I use it?
```

This turns the repository into a **personal knowledge base** rather than a collection of copied tutorials.

---

# 🧰 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
</p>

---

# 📊 Repository Philosophy

This repository is intentionally **evolving**.

New concepts will be added as I learn them, and existing examples may be refactored as my understanding improves.

```text
Beginner
   ↓
Understand
   ↓
Implement
   ↓
Experiment
   ↓
Build
   ↓
Optimize
   ↓
Production Thinking
```

> **The code is the experiment.
> The README is the memory.
> The concepts are the real asset.**

---

# 👨‍💻 Author

**Deepak Yadav**

Computer Engineering Student
Software Engineering • Backend • Full-Stack • AI/ML

---

<p align="center">

### 🌱 Learning MongoDB one concept at a time.

**Learn. Build. Debug. Understand. Repeat.**

</p>

---

## 📜 License

This repository is primarily maintained for **personal learning and technical reference**.