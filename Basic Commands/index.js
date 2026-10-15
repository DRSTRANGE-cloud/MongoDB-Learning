
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const db = client.db("college");
    const collection = db.collection("students");
    // Reset collection for a repeatable practical run
    await collection.deleteMany({});
    // CREATE: Insert one student
    console.log("\n1. Insert One Student:");
    console.log(await collection.insertOne({
      rollNo: 101,
      name: "Amit",
      department: "Computer",
      marks: 78
    }));
    // CREATE: Insert multiple students, including your record
    console.log("\n2. Insert Multiple Students:");
    console.log(await collection.insertMany([
      { rollNo: 102, name: "Priya", department: "Computer", marks: 92 },
      { rollNo: 103, name: "Rahul", department: "IT", marks: 75 },
      { rollNo: 104, name: "Neha", department: "Computer", marks: 88 },
      { rollNo: 105, name: "Rohan", department: "IT", marks: 65 },
      { rollNo: 190, name: "Deepak Yadav", department: "Computer", marks: 95 }
    ]));
    // READ: Display all students
    console.log("\n3. All Students:");
    console.log(await collection.find({}).toArray());
    // READ: Find one student
    console.log("\n4. Find One Student:");
    console.log(await collection.findOne({ rollNo: 190 }));
    // READ: Find Computer department students
    console.log("\n5. Computer Department Students:");
    console.log(await collection.find({ department: "Computer" }).toArray());
    // READ: Find students scoring above 80
    console.log("\n6. Students Having Marks Greater Than 80:");
    console.log(await collection.find({ marks: { $gt: 80 } }).toArray());
    // UPDATE: Update one student's marks
    console.log("\n7. Update One Student:");
    console.log(await collection.updateOne(
      { rollNo: 101 },
      { $set: { marks: 85 } }
    ));
    // UPDATE: Increase marks for all Computer students
    console.log("\n8. Update Multiple Students:");
    console.log(await collection.updateMany(
      { department: "Computer" },
      { $inc: { marks: 5 } }
    ));
    console.log("\nStudents After Updates:");
    console.log(await collection.find({}).toArray());
    // DELETE: Delete one student
    console.log("\n9. Delete One Student:");
    console.log(await collection.deleteOne({ rollNo: 105 }));
    // DELETE: Delete all remaining IT students
    console.log("\n10. Delete Multiple Students:");
    console.log(await collection.deleteMany({ department: "IT" }));
    console.log("\n11. Final Students Collection:");
    console.log(await collection.find({}).toArray());
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("\nMongoDB connection closed.");
  }
}
main();