// javascript file for weather.html file to show city, state, condition and temperature from below array.

// use class daydate show date and time
class daydate{
daydate1(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("time").innerHTML = daylist[day]+","+time1;
  }
}
// creating object of daydate class
let demo = new daydate();
demo.daydate1();
// using api shows current weather of city
document.getElementById("search").onclick = () =>{
 var select = document.getElementById("list").value;
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8`).then(data =>{
 return data.json();
 }).then(data1 =>{
  //  console.log(data1);

   document.getElementById("city").innerHTML=data1.name;
   document.getElementById("temp").innerHTML=data1.main.temp; 
   document.getElementById("weather").innerHTML=data1.weather[0].main;

   var iconcode = data1.weather[0].icon;
   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById('wicon').src = iconurl;
 });
  
}

//Conversion celsius to fahrenheit 
document.getElementById("fahren").addEventListener("click",function fahrenheit(){
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

// Conversion fahrenheit to celsius
document.getElementById("cels").addEventListener("click",function celsius(){
  var select = document.getElementById("list").value;
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8`).then(data =>{
   return data.json();
   }).then(data1 =>{
    // var temperature = Math.round(data1.main.temp);
    document.getElementById("temp").innerHTML=data1.main.temp; 
    // console.log(temperature);
   });
})

  
