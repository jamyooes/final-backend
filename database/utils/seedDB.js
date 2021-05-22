const { Campus, Student } = require("../models");

const seedDB = async () => {
  const dummy_campus = await Campus.create({
    name: "Hunter College",
    imageUrl: "https://ephemeralnewyork.files.wordpress.com/2017/07/thomashunterhallhuntercollege.jpg",
    address: "NY, NY",
    description: "This is a school in NYC.",
  });
  const dummy_campus2 = await Campus.create({
    name: "Harvard",
    imageUrl: "https://www.gse.harvard.edu/sites/default/files//content-images/1500x750-harvard-yard.jpg",
    address: "Boston, MA",
    description: "This is a school in MA.",
  });

  const dummy_student = await Student.create({
    firstname: "Joe",
    lastname: "Shmo",
    email: "Joe.Shmo@gmail.com",
    image: "https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg",
    gpa: 4,
  });

  const dummy_student2 = await Student.create({
    firstname: "John",
    lastname: "Smith",
    email: "John.Smith@gmail.com",
    image: "https://media.istockphoto.com/photos/happy-student-with-books-looking-at-camera-in-library-picture-id1161151670?k=6&m=1161151670&s=612x612&w=0&h=-tD8GcAmKg1Wl9s0FddhS7GIBZyk-MpqK2Ddg9dnldE=",
    gpa: 4,
  })

  await dummy_student.setCampus(dummy_campus);
  await dummy_student2.setCampus(dummy_campus2);
};

module.exports = seedDB;
