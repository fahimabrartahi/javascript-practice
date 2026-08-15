localStorage.setItem("name", "Fahim");
localStorage.setItem("goal", "Full stack developer");

let name = localStorage.getItem("name");
let goal = localStorage.getItem("goal");

console.log(name);
console.log(goal);


let tasks = ["study thermodynamics", "practice js", "push to github"];
localStorage.setItem("tasks", JSON.stringify(tasks));

let savedTasks = JSON.parse(localStorage.getItem("tasks"));

console.log(savedTasks);
console.log(savedTasks[1]);