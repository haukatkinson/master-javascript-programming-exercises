let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            delete obj[key]
        }
    }
    
}

removeStringValues(obj);
console.log(obj); // { age: 20 }