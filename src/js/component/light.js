import React from "react";

const Light = (props) => {

    const onOff = () => {
        props.setStateLight({...props.stateLight, [props.color]: props.stateLight[props.color] === "off" ? "on" : "off"})
    }

    return (<button className={`Light ${props.style}`} onClick={() => {onOff()}}>
            </button>
        )
}

export default Light