function detectOutlierValue(string) {
    let arr = string.split
    let even = [];
    let odd = [];
    for(var i = 0; i < string.length; i++){
        if(string[i]%2==0){
            even.push(string[i])
        } else if(string[i]%2!=0){
            odd.push(string[i])
        }
    }
    if(even.length < odd.length){
        return even
    } else if(odd.length < even.length){
        return odd
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2