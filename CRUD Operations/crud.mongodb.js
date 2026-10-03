use("CrudDB")
db.createCollection("users")
/*db.users.insertOne({
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    age: 30,
    gender:"Male"
})
db.users.insertMany([
  {
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    age: 30,
    gender: "Male",
  },
  {
    name: "Jane Smith",
    email: "JaneSmith@yahoo.com",
    age: 28,
    gender: "Female",
  },
  {
    name: "Michael Johnson",
    email: "MichaelJ@outlook.com",
    age: 35,
    gender: "Male",
  },
  {
    name: "Emily Davis",
    email: "EmilyDavis@gmail.com",
    age: 26,
    gender: "Female",
  },
  {
    name: "David Wilson",
    email: "DavidW@protonmail.com",
    age: 40,
    gender: "Male",
  },
  {
    name: "Sophia Martinez",
    email: "SophiaM@hotmail.com",
    age: 33,
    gender: "Female",
  },
  {
    name: "James Anderson",
    email: "JamesA@gmail.com",
    age: 29,
    gender: "Male",
  },
  {
    name: "Olivia Thomas",
    email: "OliviaT@icloud.com",
    age: 31,
    gender: "Female",
  },
  {
    name: "Daniel Lee",
    email: "DanielLee@gmail.com",
    age: 37,
    gender: "Male",
  },
  {
    name: "Ava Taylor",
    email: "AvaTaylor@yahoo.com",
    age: 25,
    gender: "Female",
  },
]);

*/
//Read
let a = db.users.find({ name: "Jane Smith" }); 
console.log(a.toArray());

//Update
db.users.updateOne({name:"John Doe"},{$set:{name:"Deepak Yadav"}})

//Delete
db.users.deleteOne({name:"Deepak Yadav"})