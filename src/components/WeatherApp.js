import React from 'react';

import Header from './Header';
import Data from './Data';
import Search from './Search';


var weatherValue = {};

class WeatherApp extends React.Component {
    state = {
       city: '',
    }
    /*
    componentDidMount= () => {   //instance of the class
        try {
            const json = localStorage.getItem('city');
            const city = JSON.parse(json);
    
            if(city){
                this.setState(() => ({city}));
            }       
        } catch(e) {
            // do nothing
        }
        console.log(this.state);
    } 
    */
    handleSearchWeather = (city) => {
        this.setState((prevState) => ({city: city}))

    }    
    
    /*
    componentDidUpdate= (prevProps, prevState) => {   //instance of the class
        if(prevState.city != this.state.city){
            const json= JSON.stringify(this.city);
            localStorage.setItem('city', json);
        }
    }
    compoentWillUnmouted= () => {
        console.log("Component will unmounted!");
    }

    
    handleDeleteOptions= () =>{
        this.setState(() => ({options: [] }))
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) =>({options: prevState.options.filter((option) => option!== optionToDelete)}))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        //alert(this.state.options[randomNum]);
        this.setState(() => ({selectedOption: this.state.options[randomNum]}));    
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists'
        }
        this.setState((prevState) => ( {options: prevState.options.concat([option])}))

    }

    handleCloseModal = (selectedOption) => {
        this.setState(() => ({selectedOption: undefined}))
    }
    */
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Data 
                        data={this.state}
                    />
                </div>
                <div>
                    <Search
                        handleSearchWeather={this.handleSearchWeather}
                    />
                </div>
            </div>
        );
    }
}

export default WeatherApp;