import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    This application uses the following tech stack
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Mocah</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
