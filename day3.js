let student = {
    name: "Fahim",
    age: 20,
    major: "Mechanical Engineering",
    isEnrolled: true,
    university: "CUET"
};
console.log(student.name);
console.log(student.major);
console.log(student);
console.log(student.university);
student.gpa = 3.8;
console.log(student.gpa);

let course = {
    name: "Thermodynamics",
    credits: 3,
    grade: 85,
    getSummary: function() {
        return course.name + " - Grade: " + course.grade;
    },
    ispassing: function(){
        return course.grade>50
    }
};

console.log(course.getSummary());
console.log(course.ispassing())