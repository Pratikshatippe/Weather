

var information = [
  { cityname: "Pune", State: "Maharashtra", type: "Rainy ☔", temperature: 25 },
  { cityname: "Chennai", State: "Tamil Nadu", type: "Mostly cloudy ☁", temperature: 28},
  { cityname: "Kolhapur", State: "Maharashtra", type: "sunny ☀️", temperature: 32},
  { cityname: "Bengaluru", State: "Karnataka", type: "Partly Cloudy ⛅", temperature: 21},
  { cityname: "Lucknow", State: "Uttar Pradesh", type: "sunny ☀️", temperature: 34},
  { cityname: "Bhopal", State: "Madhya Pradesh", type: "Mostly Cloudy ☁", temperature: 22}
] 
//compare value with array and displays data on webpage
function showInput() {
  var e = document.getElementById("list").value;
  // var currentCity = e.options[e.selectedIndex].value;
  var x = information.find(v => v.cityname == e);

  document.getElementById("city").innerHTML=x.cityname;
  document.getElementById("state").innerHTML=x.State;
  document.getElementById("weather").innerHTML = x.type;
  document.getElementById("temp").innerHTML = x.temperature;
} 

// // Date and Time
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = daylist[day];
var time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("time").innerHTML = time1;

// // Celsius to fahrenheit conversion of temperature
function fahrenheit()
{
  var e = document.getElementById("list").value;
  // var currentCity = e.options[e.selectedIndex].value;
  var x1 = information.find(v => v.cityname == e);
 // console.log(fahrenheit);
  var fahrenheit;
  // if(fahrenheit != ''){
    fahrenheit = Math.round((x1.temperature * 9/5) + 32); 
    document.getElementById("temp").innerHTML = fahrenheit;
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
  
