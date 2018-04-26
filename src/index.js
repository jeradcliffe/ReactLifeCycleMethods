import 'babel-polyfill';
import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from "./common/header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        let ChildComponent;

        switch(this.props.route) {
            case 'about':
                ChildComponent = About;
                break;
            default:
                ChildComponent = Home;

        }

        return (
            <div>
                <Header />
                <ChildComponent />
            </div>
        );
    }
}

// Simple way of doing things and to only be used as a back up plan for simple apps
const renderApp = () => {
    // Take piece of the URL
    let route = window.location.hash.substr(1);
    render (
        <App route={route} />,
        document.getElementById('app')
    );
};

App.propTypes = {
    route: PropTypes.string
};

// hashchange is the event that occurs when there is a hash change in the URL
window.addEventListener('hashchange', renderApp);
renderApp();


