
const students = [
  { id: 1, name: "Amina", year: 3, grades: [9, 8, 10], contact: { github: "amina-dev" } },
  { id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
  { id: 3, name: "Lejla", year: 3, grades: [10, 9, 9], contact: { github: "lejla-codes" } },
  { id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// Task 5: Greeting Function

// Version 1: Using student.name and student.year
// const greet = (student) => {
//   return `Hi ${student.name}, you are in year ${student.year}`;
// };

// Version 2: Using destructuring
const greet = ({ name, year }) => {
  return `Hi ${name}, you are in year ${year}`;
};

students.forEach((student) => {
  console.log(greet(student));
});

// Task 6: List of Names

const names = students.map((student) => student.name);
console.log(names);

// Task 7: Third-Year Students

const thirdYearStudents = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearStudents);

// Task 8: Average Grades

const average = (grades) => {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));

studentsWithAverage.forEach((student) => {
  console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// Task 9: Promote Emir

const promotedStudents = students.map((student) =>
  student.name === "Emir" ? { ...student, year: 3 } : student
);

const originalEmir = students.find((student) => student.name === "Emir");
const updatedEmir = promotedStudents.find((student) => student.name === "Emir");

console.log(`Original: Emir is in year ${originalEmir.year}`);
console.log(`Updated: Emir is in year ${updatedEmir.year}`);

// Task 10: GitHub Usernames

students.forEach((student) => {
  const username = student.contact?.github ?? "no GitHub";
  console.log(`${student.name}: ${username}`);
});

// Task 11: Load a User from an API

async function loadUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const user = await response.json();
    console.log(`User ${id}: ${user.name}`);
  } catch (error) {
    console.log(`Could not load user ${id}`);
  }
}

loadUser(1);