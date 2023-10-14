const users = [
  {
    firstName: "Anshika",
    lastName: "Agarwal",
    age: "23",
  },
  {
    firstName: "Ankit",
    lastName: "Agarwal",
    age: "33",
  },
  {
    firstName: "Syed",
    lastName: "Israr",
    age: "19",
  },
  {
    firstName: "Aditya",
    lastName: "Jiwane",
    age: "21",
  },
  {
    firstName: "Naveen",
    lastName: "Agarwal",
    age: "25",
  },
];

// Print firstnames of all users whose age is greater than or equal to 25

const result = users
  .filter((user) => user.age >= 25)
  .map((res) => res.firstName);

console.log("result", result);
