const { Campus, Student } = require("../models");

const seedDB = async () => {
  const dummy_campus = await Campus.create({
    name: "Hunter College",
    imageUrl: "",
    address: "Boston, MA",
    description: "This is a school in NYC.",
  });
  const dummy_campus2 = await Campus.create({
    name: "Harvard",
    imageUrl: "",
    address: "Ny, ny",
    description: "This is a school in MA.",
  });

  const dummy_student = await Student.create({
    firstname: "Joe",
    lastname: "Shmo",
    email: "Joe.Shmo@gmail.com",
    image: "",
    gpa: 4,
  });

  await dummy_student.setCampus(dummy_campus);
};

module.exports = seedDB;
