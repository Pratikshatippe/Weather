
// Displays data on webpage
function showInput() {
  var information = [
    { cityname: "Pune, Maharashtra", type: "humidity ", temperature: 30 },
    { cityname: "Delhi, Maharashtra" , type: "Mostly cloudy", temperature: 28},
    { cityname: "Kolhapur, Maharashtra", type: "wind", temperature: 24},
    { cityname: "Bengaluru, Karnataka", type: "Partly Cloudy", temperature: 21}
]
  var e = document.getElementById("list");
  var currentCity = e.options[e.selectedIndex].value;
  var x = information.find(v => v.cityname == currentCity);

document.getElementById("demo").innerHTML=x['cityname'];
document.getElementById("demo3").innerHTML = x['type'];
document.getElementById("demo4").innerHTML = x['temperature'];
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

// temperature
