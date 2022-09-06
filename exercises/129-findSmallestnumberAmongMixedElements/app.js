function findSmallestNumberAmongMixedElements(arr) {
 let big = 1000
 let small = 0

 for(var i = 0; i < arr.length; i++){
  if(typeof arr[i] === 'number' && arr[i] < big){
    big = arr[i]
    small = arr[i];
    
  }
 }
 return small
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4