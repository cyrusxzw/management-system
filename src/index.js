import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import PizzaAdmin from './component/pizzaAdmin'

ReactDOM.render(<BrowserRouter><PizzaAdmin /></BrowserRouter>, document.getElementById('app'));