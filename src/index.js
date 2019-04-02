import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Hello, here we go now!
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#app')
);
