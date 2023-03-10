// @flow 
import * as React from 'react';
type Props = {
    height:String,
    width:String,
    top:String,
    left:String,
    className:String,
    OnClick:Function,
    style: Object,
    inner:Object
};
export const Space = (props: Props) => {
    return (
        <div 
        onClick={props.OnClick}
        className={props.className}
        style={{...props.style,
        height:props.height,
        width:props.width,
        top:props.top,
        left:props.left}}>
            {props.inner} {/*Render inner elements*/}
        </div>
    );
};