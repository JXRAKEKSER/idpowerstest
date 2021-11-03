import React from "react";
import block from './Calculator.module.css'
import {RangeWidget} from "./RangeWidget.js";
import {SubmitButton} from "./SubmitButton.js";
import {ButtonSwitcher} from "./ButtonSwitcher.js";
import {BEMComponent} from "./BEMComponent.js";
import '../index.css'

class Calculator extends BEMComponent{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(){
       const loan = document.querySelector('#sumwidget');
       console.log(loan)
   }
   render() {
       return (
           <section className='calculator_sec' onChange={()=>this.handleChange}>
               <form className={`${block.calculator} page__calculator` }>

               <h1 className={block.calculator__tilte}>Калькулятор займа под ПТС</h1>
               <h2 className={block.calculator__switchertext}>Тип платежа</h2>
               <div className={block.calculator__switcher}>
                   <ButtonSwitcher data={this.props.widgetData.differentiatedbutton}/>
                   <ButtonSwitcher data={this.props.widgetData.annuitybutton}/>
               </div>
               <RangeWidget data={this.props.widgetData.sumwidget} selector={block.calculator__sumcomponent}/>
               <RangeWidget data={this.props.widgetData.timewidget} selector={block.calculator__timecomponent}/>
               <div className={block.calculator__rateinfo}>
                   <p className={block.calculator__infosubtitle}>Ставка</p>
                   <p className={block.calculator__infocontent}>2.7%</p>
               </div>
               <div className={block.calculator__paymentinfo}>
                   <p className={block.calculator__infosubtitle}>Ежемесячный платеж</p>
                   <p className={block.calculator__infocontent}>3078 &#8381;</p>
               </div>

               <p className={block.calculator__captionone}>Условия выдачи займа могут отличаться, исходя из анализа
                   документов и состояния вашего автомобиля</p>


               <SubmitButton selector={block.calculator__submitbutton} data={this.props.widgetData.submitbutton}/>
                   <p className={block.calculator__captiontwo}>Расчет займа предварительный</p>
               </form>
           </section>
       );
   }
}

export {Calculator};