let numbers = [12,24,532,34,234,75,65,74];
console.log(numbers);

let greaterThan50 = numbers.filter(function above50(n){
    return n >= 50;
});
console.log(greaterThan50);

