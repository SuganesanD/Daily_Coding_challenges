var student = {
    id: 1,
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science", "History"]
};
function displayStudentDetails(student) {
    console.log("ID: ".concat(student.id));
    console.log("Name: ".concat(student.name));
    console.log("Age: ".concat(student.age));
    console.log("Courses: ".concat(student.courses.join(', ')));
}
displayStudentDetails(student);
