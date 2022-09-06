function computeFactorialOfN(n) {
   let sum = 1
   for(var i = n; i > 0; i--){
    sum = sum * i
   }
   return sum
}

let output = computeFactorialOfN(4); 
console.log(output); // --> 24