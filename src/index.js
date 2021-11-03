import  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Calculator} from "./components/Calculator.js";
import {widgets} from "./constants/data.js";

class Container extends React.Component {
    render() {
        return (
            <div className='container'></div>
        );
    }
}



class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page">
                <Calculator widgetData = {this.props.data}/>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game data = {widgets} />,
    document.getElementById('root')
);
