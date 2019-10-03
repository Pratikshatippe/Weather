// // javascript file for weather.html file to show city, state, condition and temperature from below array.

// var information = [
//   { cityname: "Pune", state: "Maharashtra", type: "Rainy ☔", temperature: 25 },
//   { cityname: "Chennai", state: "Tamil Nadu", type: "Mostly cloudy ☁", temperature: 28},
//   { cityname: "Kolhapur", state: "Maharashtra", type: "Sunny ☀️", temperature: 32},
//   { cityname: "Bengaluru", state: "Karnataka", type: "Partly Cloudy ⛅", temperature: 21},
//   { cityname: "Lucknow", state: "Uttar Pradesh", type: "Sunny ☀️", temperature: 34},
//   { cityname: "Bhopal", state: "Madhya Pradesh", type: "Partly Cloudy ⛅", temperature: 22}
// ] 
// //compare array value
// let e = '';
// let x = '';
// let data = {};
// let temperature = '';
// // let temperatureC = '';
//   function showInput(){

//     e = document.getElementById("list").value;
   
//     x = information.find(v => v.cityname == e);
//     data = {
//       cityname: x.cityname,
//       state: x.state,
//       type: x.type,
//       temperature: x.temperature,
//     }

//     let store = new weatherdata(data);
//     document.getElementById("city").innerHTML= store.getCity();
//     document.getElementById("state").innerHTML= store.getState();
//     document.getElementById("weather").innerHTML = store.getType();
//     document.getElementById("temp").innerHTML = store.getTemp();
  
// } 

// // use class daydate show date and time
class daydate{
daydate1(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
// console.log(daylist[day]);
document.getElementById("time").innerHTML = daylist[day]+","+time1;
  }
}
// creating object of daydate class
let demo = new daydate();
demo.daydate1();



// // Celsius to fahrenheit conversion of temperature
// function fahrenheit()
// {
//   var e = document.getElementById("list").value;
//  // console.log(fahrenheit);
//   var fahrenheit;
//     fahrenheit = Math.round((select.temperature * 9/5) + 32); 
//     document.getElementById("temp").innerHTML = fahrenheit;
  
// }

document.getElementById("search").onclick = () =>{
 var select = document.getElementById("list").value;
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8`).then(data =>{
 return data.json();
 }).then(data1 =>{
  //  console.log(data1);

   document.getElementById("city").innerHTML=data1.name;
   document.getElementById("temp").innerHTML=data1.main.temp; 
   document.getElementById("weather").innerHTML=data1.weather[0].description;

   var iconcode = data1.weather[0].icon;
   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById('wicon').src = iconurl;
 });
  
}
document.getElementById("fahren").addEventListener("click",function fahrenheit(e){
  var select = document.getElementById("list").value;
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8`).then(data =>{
   return data.json();
   }).then(data1 =>{
    var temperature = data1.main.temp;
    // console.log(temperature);
      var fahrenheit = Math.round((temperature * 9/5) + 32); 
      document.getElementById("temp").innerHTML = fahrenheit;
   });
})
document.getElementById("cels").addEventListener("click",function celsius(e){
  var select = document.getElementById("list").value;
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8`).then(data =>{
   return data.json();
   }).then(data1 =>{
    document.getElementById("temp").innerHTML=data1.main.temp; 
    // console.log(temperature);
  
   });
})

  
