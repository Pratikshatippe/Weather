

var information = [
  { cityname: "Pune, Maharashtra", type: "Rainy ☔", temperature: 40 },
  { cityname: "Delhi, Maharashtra" , type: "Mostly cloudy ☁", temperature: 28},
  { cityname: "Kolhapur, Maharashtra", type: "sunny ☀️", temperature: 24},
  { cityname: "Bengaluru, Karnataka", type: "Partly Cloudy ⛅", temperature: 21}
] 
// Displays data on webpage
function showInput() {
  
  var e = document.getElementById("list");
  var currentCity = e.options[e.selectedIndex].value;
  var x = information.filter(v => v.cityname == currentCity);

document.getElementById("demo").innerHTML=x[0].cityname;
document.getElementById("demo3").innerHTML = x[0]['type'];
document.getElementById("demo4").innerHTML = x[0]['temperature'];
} 

// // Date and Time
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("demo1").innerHTML = daylist[day];
var time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("demo2").innerHTML = time1;

// // temperature
function fahrenheit()
{
  var e = document.getElementById("list");
  var currentCity = e.options[e.selectedIndex].value;
  var x1 = information.filter(v => v.cityname == currentCity);
    // var currentCity = e.options[e.selectedIndex].value;

  
// console.log(fahrenheit);
  var fahrenheit;
  if(fahrenheit != ''){
    fahrenheit = (x1[0].temperature * 9/5) + 32; 
    document.getElementById("demo4").innerHTML = fahrenheit;
  }
}

// function celsius()
// {
//   var fahrenheit = document.getElementById("demo4").innerHTML;
// // console.log(fahrenheit);
//   var f;
//   if(fahrenheit != ''){
//     f = (fahrenheit - 32) * 5/9; 
//     document.getElementById("demo4").innerHTML = f;
//   }
// }
  
