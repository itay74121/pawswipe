// @flow
import * as React from 'react';
import  "./MessageCard.css"
import {textlinefixes} from "./MessageCardUtil.js"
type Props = {
  text:String,
  langdir:String,
  direction: Bool
};
export function MessageCard(props: Props) {
  const treshhold = Math.floor(0.75*document.getElementById("message-container").clientWidth)
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
      {textlinefixes(props.text,treshhold)}
    </div>
      
    </div>
  );
};