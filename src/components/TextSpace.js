// @flow
import * as React from 'react';
type Props = {
    height:String,
    width:String,
    top:String,
    left:String,
    className:String,
    style: Object,
    placeholder:String
};
export function TextSpace(props: Props) {
  return (
    <input 
    placeholder={props.placeholder}
    className={props.className}
    style={{...props.style,
    height:props.height,
    width:props.width,
    top:props.top,
    left:props.left}}/>
  );
};