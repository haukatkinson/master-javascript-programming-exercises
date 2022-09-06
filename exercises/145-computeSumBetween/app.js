function computeSumBetween(num1, num2) {
   let sum = 0
   for(var i = num1; i < num2; i++){
    sum = sum + i
   }
   return sum
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9