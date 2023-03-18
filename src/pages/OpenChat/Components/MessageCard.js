// @flow
import * as React from 'react';
import  "./MessageCard.css"

type Props = {
  text:String,
  direction: Bool
};
export function MessageCard(props: Props) {
    let c =  props.direction === true? "incoming":"outcoming"
    c = "bubble " + c
    console.log(c)
  return (
    <div
    className='container'>
    <div
    className= {c}
    >
    {props.text}
    </div>
      
    </div>
  );
};