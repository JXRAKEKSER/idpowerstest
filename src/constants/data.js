
const widgets = {
    sumwidget: {
        label:'Сумма займа',
        sum:'15000',
        units:'&#8381;',
        step: '500',
        min:'15 000',
        max:'1 000 000',
        id:'sumwidget'
    },
    timewidget:{
        label:'Срок займа',
        sum:'2',
        units:'',
        min:'2',
        max:'12',
        id: 'timewidget'
    },
    submitbutton:{
        text:'Подать заявку',

    },
    differentiatedbutton:{
        text:'Дифференцированный',
        toogle: true
    },
    annuitybutton:{
        text:'Аннуитетный',
        toogle: false
    }
}

export {widgets};