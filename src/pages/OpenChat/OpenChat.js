// @flow
import * as React from 'react';
import "./OpenChat.css"
import paw from "../../paw.png"
import { Space } from '../../components/Space';

type Props = {
    chatnumber:Number
};
export function OpenChat(props: Props) {
    let logo = <img 
    style={{
      width:"30%",
      height:"127%",
      position:"relative",
      top: "-9%",
      filter:"brightness(0%)"
    }}
    src={paw}/>

  return (
    <div 
    style={{
      height:document.documentElement.clientHeight
    }}
    className="OpenChat">
    <Space 
      className="Chat-navbar"
      inner={[logo]}
      />
    <div
    style={{
      top:window.innerHeight-60
    }}
    className='bottom-chat-input'>
      <Space   
      height="100%"
      width="82%"
      left="2%"
      top="5%"
      style={{
        position:"absolute",
        boxShadow:"0 0 10px rgba(0,0,0,0.5)",
        borderRadius:"15px",
        overflow:"hidden"
      }}   
      className="ff" 
      inner={[ 
      <textarea 
      dir='auto'
      className='chat-input'
      ></textarea>]}
    />

      <div className='send-button'>
        send
      </div>
    </div>
    </div>
  );

};