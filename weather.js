// javascript file for weather.html file to show city, state, condition and temperature from below array.

var information = [
  { cityname: "Pune", State: "Maharashtra", type: "Rainy ☔", temperature: 25 },
  { cityname: "Chennai", state: "Tamil Nadu", type: "Mostly cloudy ☁", temperature: 28},
  { cityname: "Kolhapur", state: "Maharashtra", type: "sunny ☀️", temperature: 32},
  { cityname: "Bengaluru", state: "Karnataka", type: "Partly Cloudy ⛅", temperature: 21},
  { cityname: "Lucknow", state: "Uttar Pradesh", type: "sunny ☀️", temperature: 34},
  { cityname: "Bhopal", state: "Madhya Pradesh", type: "Partly Cloudy ⛅", temperature: 22}
] 
//compare array value
let e = '';
let x = '';
let data = {};
let temperature = '';
// let temperatureC = '';
  function showInput(){

    e = document.getElementById("list").value;
   
    x = information.find(v => v.cityname == e);
    data = {
      cityname: x.cityname,
      state: x.state,
      type: x.type,
      temperature: x.temperature,
    }

    let store = new weatherdata(data);
    document.getElementById("city").innerHTML= store.getCity();
    document.getElementById("state").innerHTML= store.getState();
    document.getElementById("weather").innerHTML = store.getType();
    document.getElementById("temp").innerHTML = store.getTemp();
  
} 

// // use class daydate show date and time
class daydate{
daydate1(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = daylist[day];
let time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
// console.log(daylist[day]);
document.getElementById("time").innerHTML = time1;
  }
}
// creating object of daydate class
let demo = new daydate();
demo.daydate1();


// // Celsius to fahrenheit conversion of temperature
function fahrenheit()
{
  var e = document.getElementById("list").value;
  var x1 = information.find(v => v.cityname == e);
 // console.log(fahrenheit);
  var fahrenheit;
    fahrenheit = Math.round((x1.temperature * 9/5) + 32); 
    document.getElementById("temp").innerHTML = fahrenheit;
  
}

  
