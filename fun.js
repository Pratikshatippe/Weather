// javascript file for weather.html file to show city, state, condition and temperature from below array.

// use class daydate show date and time
class weather{
getDaydate(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let time = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("time").innerHTML = daylist[day]+","+time;
  }

// using api shows current weather of city
getApiData(){
document.getElementById("search").onclick = () =>{
 let select = document.getElementById("list").value;
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+select+"&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8",
 function(data1){
  //  console.log(data1);

   document.getElementById("city").innerHTML=data1.name;
   document.getElementById("temp").innerHTML=data1.main.temp; 
   document.getElementById("weather").innerHTML=data1.weather[0].main;

   let iconcode = data1.weather[0].icon;
   let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById('wicon').src = iconurl;
 });
}
}
  
getFahrenheit(){

//Conversion celsius to fahrenheit 
document.getElementById("fahrenheit").addEventListener("click",function displayFahrenheit(){
  let temperature= document.getElementById("temp").textContent;
    // console.log(temperature);
      let Fahrenheit = Math.round((temperature * 9/5) + 32); 
      document.getElementById("temp").innerHTML = Fahrenheit;
})
}

getCelsius(){
// Conversion fahrenheit to celsius
document.getElementById("celsius").addEventListener("click",function displayCelsius(){ 
    document.getElementById("temp").textContent; 
    // console.log(temperature);
})
}
}

 
let input = new weather();
input.getDaydate();
input.getApiData();
input.getFahrenheit();
input.getCelsius();

  
