import React from 'react';
import "./Background.scss"

const Background = (props) => {
    const style = {
        backgroundImage: props.image
    }
    return (
        <div styles={{ backgroundImage:`url(${props.image})` }} className={props.className + " Background"}/>
    );
};

export default Background;