const mongoose = require("mongoose");

//creating a database
mongoose
  .connect("mongodb://localhost:27017/firstdb")
  .then(() => console.log("connected Successfully"));

//creating a doument structure/schema
const newSchema = new mongoose.Schema({
  name: String,
  author: String,
  videos: Number,
  active: Boolean,
});

//creating a model for collection
const Firstmodel = mongoose.model("Firstdb", newSchema);

//creating a document---------------------------------------------------------
// const newDocument = new Firstmodel({
//   name: "firstdb",
//   author: "Aman",
//   videos: 1,
//   active: true,
// });

//saving document to database
// newDocument.save().then(() => console.log("saved successfully"));

//saving many documents in form of array
//creating documents...we should async await method

// const newDocument2 = new Firstmodel({
//   name: "firstdb",
//   author: "snehal",
//   videos: 1,
//   active: true,
// });
// const newDocument3 = new Firstmodel({
//   name: "firstdb",
//   author: "harsh",
//   videos: 1,
//   active: true,
// });
// const newDocument4 = new Firstmodel({
//   name: "firstdb",
//   author: "vani",
//   videos: 1,
//   active: true,
// });
// const newDocument5 = new Firstmodel({
//   name: "firstdb",
//   author: "jasmin",
//   videos: 1,
//   active: false,
// });

//inserting in form of array
// Firstmodel.insertMany([
//   newDocument2,
//   newDocument3,
//   newDocument4,
//   newDocument5,
// ]).then(() => console.log("Inserted successfully"));

//finding documents-------------------------------------------------

//creating a async function
// const getDocument = async () => {
//   try {
//     //using comparing operator
//     // const result = await Firstmodel.find({
//     //   author: { $in: ["vani", "harsh"] },
//     // });

//     //using logical operators
//     // const result = await Firstmodel.find({
//     //   $and: [{ author: "vani" }, { active: "false" }],
//     // });

//     //using count function
//     // const result = await Firstmodel.find({ author: "Aman" }).countDocuments();(

//     //using sort function
//     const result = await Firstmodel.find().sort({ author: 1 });

//     console.log(result);
//   } catch (err) {
//     console.log("error 404");
//   }
// };
// //calling a function
// getDocument();

//updating the document--------------------------------------------------------------

// const updateDocument = async (_id) => {
//   try {
//     const result = await Firstmodel.findByIdAndUpdate (
//       { _id },
//       {
//         $set: {
//           name: "firstdb",
//         },
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log("oops...:(");
//   }
// };

// updateDocument("63564587e054bf310d74d050");

//delete document---------------------------------------------------------------

const deleteDocument = async (_id) => {
  try {
    const result = await Firstmodel.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log("oops...:(");
  }
};

deleteDocument("6356427f0f33bb46eca50550");

//using validator we can do more type of validation--------------------------------
