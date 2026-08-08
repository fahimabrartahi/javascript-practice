let fruits = ["apples", "bananas", "oranges", "mangoes"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);

fruits.push("grapes");
console.log(fruits);

fruits.pop()
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let numbers=[5,12,3,8,1,9];
let evennumbers=numbers.filter(function(num){
    return num%2==0;
})
console.log(evennumbers);

let prices=[100, 250, 80, 320];
let discounted = prices.map(function(price){
    return price*0.9;
})
console.log(discounted);