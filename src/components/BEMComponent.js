import React from "react";


class BEMComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    getClassMix(blockSelector){
        return `${blockSelector} ${this.props.selector}`;
    }
}

export {BEMComponent}
