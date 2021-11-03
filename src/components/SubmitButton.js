import {BEMComponent} from "./BEMComponent.js";
import block from './SubmitButton.module.css'

class SubmitButton extends BEMComponent{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.getClassMix(block.submitbutton)} >{this.props.data.text}</button>
        );
    }
}

export {SubmitButton};