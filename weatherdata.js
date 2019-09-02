// Creating class file and define method which is call from weather.js file
class weatherdata{
    constructor(data){
        this.cityname = data.cityname;
        this.state = data.state;
        this.type = data.type;
        this.temperature = data.temperature;
    }
    getCity(){
        return this.cityname;
    }
    getState(){
        return this.state;
    }
    getType(){
        return this.type;
    }
    getTemp(){
        return this.temperature;
    }
}