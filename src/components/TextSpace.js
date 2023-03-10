// @flow
import * as React from 'react';
type Props = {
    height:String,
    width:String,
    top:String,
    left:String,
    className:String,
    style: Object,
    placeholder:String,
    multiline:Boolean
};
export function TextSpace(props: Props) {  
  if (props.multiline!==true){
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
  }
  else{
    return (
      <textarea 
      maxLength={80}
      placeholder={props.placeholder}
      className={props.className}
      style={{...props.style,
      height:props.height,
      width:props.width,
      top:props.top,
      left:props.left}}></textarea>
    );
  }
};