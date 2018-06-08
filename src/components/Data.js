import React from 'react';
import weatherConditionCode from './utils/WeatherConditionCode.js';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiUrl = '&appid=42d4745ffaaa8a25c334c37b6bf296be';
const iconUrl= 'http://openweathermap.org/img/w/';
var iconCode= '';

export default class Data extends React.Component {
    state = {
        weather: {
            weatherId: 0,
            name: 'Helsinki',
            currently: '',
            temp: 0,
            humidity: 0
        }
    }

    componentDidMount= () => {
        fetch(rootUrl + 'Vaasa' + apiUrl).then(result => {
            return result.json();
        }).then(data => {           
            this.setState((prevState) => ({
                weather: {
                    weatherId: data.weather[0].id,
                    name: data.name,
                    currently: data.weather[0].main,
                    temp: ((data.main.temp-273.15) * 10) / 10 + ' Celicus',
                    humidity: data.main.humidity +'%'
                }
            }))     
    })
    }

    componentDidUpdate= (PrevProps, PrevState) => {
        if(PrevProps.data.city!=this.props.data.city){
            fetch(rootUrl + this.props.data.city + apiUrl).then(result => {
                    return result.json();
                }).then(data => {
                    if(data.cod=="404") {
                        console.log('Not found');
                    }     
                    else{
                        this.setState((prevState) => ({
                            weather: {
                                weatherId: data.weather[0].id,
                                name: data.name,
                                currently: data.weather[0].main,
                                temp: data.main.temp-273.15 + ' Celicus',
                                humidity: data.main.humidity +'%'
                            }
                        }))
                    }      
                }).catch((e)=>{
                    console.log(e);
                })
                
        }
    }

    render() {
        return (
            <div>
                <img src={iconUrl+weatherConditionCode(this.state.weather.weatherId)+'.png'}/>
                <p>{this.state.weather.name}</p>
                <p>{this.state.weather.currently}</p>
                <p>{this.state.weather.temp}</p>
                <p>{this.state.weather.humidity}</p>
            </div>
        )
    }  
}