const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/smaple", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  await Student.create({
    name: " R Harsha Raj",
    workout: false,
    height: 5.9,
  });
};

const show = async () => {
  const sh = await Student.find({});
  console.log(sh);
};

adder();
show();
