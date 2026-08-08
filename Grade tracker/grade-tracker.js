let courses = [
    { name: "Thermodynamics", grade: 85 },
    { name: "Mathematics", grade: 72 },
    { name: "Physics", grade: 90 },
    { name: "English", grade: 45 },
    { name: "Programming", grade: 88 }
];
function getaverage(){
    let total = 0;
    for(let i=0; i<courses.length; i++){
        total=total+courses[i].grade;
    }
    total=total/courses.length;
    return total;
}
console.log(getaverage());

function getstatus(grade){
    if(grade>50){
        return "Pass";
    }
    else{
        return "fail";
    }
}
console.log(getstatus(courses[1].grade));

function printreport(){
    for(let i=0; i<courses.length; i++){
        console.log(courses[i].name + " Grade- " + courses[i].grade + " Pass status- " + getstatus(courses[i].grade));
    }
    console.log(getaverage())
};
printreport()