import React from 'react';

export default class Search extends React.Component {
    state = {
        error: undefined
    }
    handleSearchWeather= (e) => {
        e.preventDefault();
        
        const city = e.target.elements.city.value.trim();
        const error = this.props.handleSearchWeather(city);
        
        this.setState(() => ({error}));
        
        if(!error) {
            e.target.elements.city.value = '';
        }
    }

    render() {
        return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleSearchWeather}>
                <input type='text' name='city'/>
                <button>Search</button>
            </form>
        </div>    
        );
    }
}
