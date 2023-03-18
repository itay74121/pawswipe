// @flow
import * as React from 'react';
import  "./MessageCard.css"

type Props = {
  text:String,
  langdir:String,
  direction: Bool
};
export function MessageCard(props: Props) {
  console.log(Math.floor(0.75*document.getElementById("message-container").clientWidth))
    let c =  props.direction === true? "incoming":"outcoming"
    c = "bubble " + c
  return (
    <div
    className='container'>
    <div
    style={{
      textAlign: props.langdir === "ltr"?"left":"right"
    }}
    className= {c}
    >
      {props.text}
    </div>
      
    </div>
  );
};