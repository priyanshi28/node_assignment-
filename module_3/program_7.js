var n = 1000+(Math.random() * (9999 - 1000)); 

var a = Math.floor(n/1000);

var b = Math.floor(n/100-(a*10));

var c = Math.floor(n/10-((a*100)+b*10));

var d = Math.floor(n/1-((a*1000)+(b*100)+(c*10)));

var x = (a+b+c+d);

while (x>=10)
{
var y = Math.floor(x/10);
var z = Math.floor(x/1) - (y*10);
var x = y+z;
}

console.log(x);