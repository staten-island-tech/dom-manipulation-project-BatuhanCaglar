const students = ["Peter", "Christina", "Kim"];
//console.log(students[0]);
students.forEach((student) => console.log(student));

const student = [
  {
    name: "Christina",
    age: 15,
    graduated: false,
  },

  {
    name: "Eyad",
    age: 16,
    graduated: false,
  },

  {
    name: "Yifan",
    age: 18,
    graduated: true,
  },
];

students
  .filter((student) => student.graduated !== false)
  .forEach((student) => console, log(student.name));
