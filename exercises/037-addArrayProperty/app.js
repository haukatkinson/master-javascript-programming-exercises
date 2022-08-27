  var myObj = {};
  var myArray = [1, 3];
  function addArrayProperty(obj, key, arr) {
    obj[key] = arr;
    return myObj;
  }

  addArrayProperty(myObj, 'myProperty', myArray);
  console.log(myObj.myProperty)