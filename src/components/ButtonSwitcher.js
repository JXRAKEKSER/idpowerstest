import {BEMComponent} from "./BEMComponent.js";
import block from './ButtonSwitcher.module.css';
class ButtonSwitcher extends BEMComponent{
    constructor(props) {
        super(props);
        this.state = {toogle:this.props.data.toogle}
        this.handleOnClick = this.handleOnClick.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
    }

    handleOnClick(evt){
        this.setState({toogle: !this.state.toogle});
        this.toogleButton();
    }

    toogleButton(){
        if(this.state.toogle){
            return `${block.buttonswitcher} ${block.buttonswitcher_isActive}`
        }
        else {
            return `${block.buttonswitcher}`;
        }
    }

    render() {
        return(
          <button className={this.toogleButton()} onClick={(evt)=>this.handleOnClick(evt)}>{this.props.data.text}</button>
        );
    }
}

export {ButtonSwitcher};