let obj = {
    name: 'Tea', price: 5, location: 'Colombia', type:'Mint' 
  };
function removeStringValuesLongerThan(num, obj) {
   for(var key in obj){
    if(typeof obj[key]=== 'string' && obj[key].length > num){
        delete obj[key]
    } 
}
   
}
removeStringValuesLongerThan(7, obj);
console.log(obj);