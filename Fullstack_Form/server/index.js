// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");
// const { CONNECTION_URL,DATABASE_NAME } = require('./config')

// const app = express()
// const PORT = 8000
// app.use(bodyParser.json())
// app.use(express.json())

// let database;
// const client = new MongoClient(CONNECTION_URL)

// const connectionToMongodb = async ()=>{
//     try{
//         await client.connect()
//         database = client.db("DATABASE_NAME")
//         console.log('connected to the database')
//     }catch(error){
//         console.log('error connecting to the database',error)
//     }
// }
// connectionToMongodb()

// app.listen(PORT,()=>{
//     console.log(`server running on port ${PORT}`)
// })


const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')
const {CONNECTION_URL,DATABASE_NAME} = require('./config')

const app = express()
const PORT = 8000
app.use(bodyParser.json())
app.use(express.json())


let database
const client = new MongoClient(CONNECTION_URL)

const connectionToMongodb = async()=>{
  try{
    await client.connect()
    database = client.db(DATABASE_NAME)
    console.log('connected to the database')
  }catch(error){
    console.log('error connecting to the databse')
  }
}
connectionToMongodb()

app.listen(PORT,()=>{
  console.log(`server is listening in port ${PORT}`)
})


























// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient, ObjectId } = require("mongodb");
// const { CONNECTION_URL, DATABASE_NAME } = require("./config");
// const cl = require("./collection");
// const COLLECTION_NAME = cl.USERS;
// const COLLECTION_Dishes = cl.DISHES;

// const app = express();
// const PORT = 8000;
// app.use(bodyParser.json());
// app.use(express.json());

// let database;
// const client = new MongoClient(CONNECTION_URL);

// const connectionToMongodb = async () => {
//   try {
//     await client.connect();
//     database = client.db("Practice");
//     console.log("connected to the database");

//     const user_collection = database.collection(COLLECTION_NAME);
//     const dish_collection = database.collection(COLLECTION_Dishes);
//     // await insertSingleDocument(user_collection);
//     // await insertMultiDocument(dish_collection);
//     // const id = "66a279efec094b83a2f1b409";
//     // await deletedoc(dish_collection,id)
//     // await deleteMultidoc(dish_collection, { Price: { gte: 600 } });

//     const id = "66aa3b26782aff15b2fe3dc6"
//     await updateSingledoc(dish_collection,id,{Price:600})
//   } catch (error) {
//     console.log("error connecting to the database", error);
//   }
// };
// connectionToMongodb();

// /*---------inserting single Document ----------------*/
// const insertSingleDocument = async (user_collection) => {
//   const docs = {
//     name: "Dipti Prasad Das",
//     email: "dipti@gmail.com",
//     Age: 24,
//   };
//   try {
//     const insertdoc = await user_collection.insertOne(docs);
//     console.log("Successfully inserted the document");
//   } catch (error) {
//     console.log("error inserting the document", error);
//   }
// };

// /*-----------------Insert Multiple Document-------------------*/
// const insertMultiDocument = async (dish_collection) => {
//   const multidoc = [
//     { name: "Pizza", Price: 400 },
//     { name: "Burger", Price: 600 },
//     { name: "Chicken Wings", Price: 800 },
//   ];
//   try {
//     const multiInsert = await dish_collection.insertMany(multidoc);
//     console.log("multi document inserted successfully");
//   } catch (error) {
//     console.log("error inserting multi document", error);
//   }
// };

// /*-----------------Delete single document Document-------------------*/
// const deletedoc = async (dish_collection, id) => {
//   try {
//     const objectid = new ObjectId(id);
//     const document = await dish_collection.findOne({ _id: objectid });
//     if (document) {
//       const result = await dish_collection.deleteOne({ _id: objectid });
//       if (result.deletedCount === 1) {
//         console.log("document deleted successfully");
//         return true;
//       } else {
//         console.log("error deleting that dish");
//         return false;
//       }
//     } else {
//       console.log("id not found");
//       return false;
//     }
//   } catch (error) {
//     console.log("error occured", error);
//     return false;
//   }
// };

// /*-----------------Delete Multiple document Document-------------------*/
// const deleteMultidoc = async (dish_collection, criteria) => {
//   try {
//     const result = await dish_collection.deleteMany({
//       Price: { $gte: 600 },
//     });
//     if (result.deletedCount > 0) {
//       console.log("document deleted successfully");
//       return true;
//     } else {
//       console.log("document with this criteria not found");
//       return false;
//     }
//   } catch (error) {
//     console.log("error deleting the dish", error);
//   }
// };

// /*-----------------Update a single document Document-------------------*/
// const updateSingledoc = async (dish_collection,id,field)=>{
//   try{
//     const objectid = new ObjectId(id)
//     const result = await dish_collection.updateOne(
//       {_id:objectid},
//       {$set:field}
//     )
//     if (result.matchedCount > 0){
//       console.log('document updated successfully')
//       return true
//     }else{
//       console.log('id is not matched')
//       return false
//     }
//   }catch(error){
//     console.log('error updating the dish',error)
//     return false
//   }
// }

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });
