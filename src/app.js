import React from 'react';
import ReactDOM from 'react-dom';

import WeatherApp from './components/WeatherApp'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<WeatherApp options={["One", "Two"]}/>, document.getElementById('app'));
