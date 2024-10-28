interface Student {
    id: number;
    name: string;
    age: number;
    courses: string[];
}

const student: Student = {
    id: 1,
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science", "History"]
};

function displayStudentDetails(student: Student): void {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(', ')}`);
}


displayStudentDetails(student);
