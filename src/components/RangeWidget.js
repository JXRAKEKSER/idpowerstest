import {BEMComponent} from "./BEMComponent";
import ReactDOM from "react-dom";
import {removeWhiteSpaces} from "../utils/stringFunctions.js";
import block from './Range.module.css';
import {HTML as Html5Entities} from "html-entities";


class RangeWidget extends BEMComponent{
    constructor(props) {
        super(props);
        this.state = {inputValue:this.props.data.sum
        };
        this.handleChange = this.handleChange.bind(this)
    }

    getId(){
        return this.props.data.id;
    }
    handleChange(evt){
        this.setState({inputValue:evt.target.value})
        console.log((evt.target.value - evt.target.min) * 100 / (evt.target.max - evt.target.min)+'% 100%')
        evt.target.style.backgroundSize = (evt.target.value - evt.target.min) * 100 / (evt.target.max - evt.target.min) + '% 100%'
    }
    getHTMLMnemonic(str){
        if(str ==='&#8381;'){
           return <span>&#8381;</span>;
        }

    }

    setTrueDeclination(){
        if(!(this.props.data.units) && this.state.inputValue >= 2 && this.state.inputValue <= 4){
            return `месяца`;
        }else if(!(this.props.data.units)) {
            return `месяцев`;
        }
    }




    render() {
        return (
            <div className={this.getClassMix(block.rangecontainer)} id={this.getId()}>
                <p className={block.rangecontainer__textlable}>{this.props.data.label}</p>
                <p className={block.rangecontainer__textsum}>{this.state.inputValue} {this.setTrueDeclination()}{this.getHTMLMnemonic(this.props.data.units)}</p>
                <input className={block.rangecontainer__range} type="range" value={this.state.inputValue} step={this.props.data.step} min={removeWhiteSpaces(this.props.data.min)} max={removeWhiteSpaces(this.props.data.max)} onChange={(evt) =>this.handleChange(evt)}/>
                <p className={block.rangecontainer__minsum}>{`от ${this.props.data.min}`} {this.getHTMLMnemonic(this.props.data.units)}</p>
                <p className={block.rangecontainer__maxsum}>{`до ${this.props.data.max}`} {this.getHTMLMnemonic(this.props.data.units)}</p>
            </div>
        );
    }
}

export {RangeWidget}