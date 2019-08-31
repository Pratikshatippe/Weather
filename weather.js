

var information = [
  { cityname: "Pune, Maharashtra", type: "Rainy ☔", temperature: 25 },
  { cityname: "Chennai, Tamil Nadu" , type: "Mostly cloudy ☁", temperature: 28},
  { cityname: "Kolhapur, Maharashtra", type: "sunny ☀️", temperature: 32},
  { cityname: "Bengaluru, Karnataka", type: "Partly Cloudy ⛅", temperature: 21},
  { cityname: "Lucknow, Uttar Pradesh", type: "sunny ☀️", temperature: 34},
  { cityname: "Bhopal, Madhya Pradesh", type: "Mostly Cloudy ☁", temperature: 22}
] 
//compare value with array and displays data on webpage
function showInput() {
  var e = document.getElementById("list");
  var currentCity = e.options[e.selectedIndex].value;
  var x = information.find(v => v.cityname == currentCity);

  document.getElementById("demo").innerHTML=x.cityname;
  document.getElementById("demo3").innerHTML = x.type;
  document.getElementById("demo4").innerHTML = x.temperature;
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

// // Celsius to fahrenheit conversion of temperature
function fahrenheit()
{
  var e = document.getElementById("list");
  var currentCity = e.options[e.selectedIndex].value;
  var x1 = information.find(v => v.cityname == currentCity);
 // console.log(fahrenheit);
  var fahrenheit;
  // if(fahrenheit != ''){
    fahrenheit = (x1.temperature * 9/5) + 32; 
    document.getElementById("demo4").innerHTML = fahrenheit;
  // }
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
  
