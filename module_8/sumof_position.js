var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

var sum = array1.map(function (num, idx) {
var result=  num + array2[idx];
var convert = result.split(",");
console.log(convert);

});