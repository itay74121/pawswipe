// @flow
import * as React from 'react';
import "./OpenChat.css"
import paw from "../../paw.png"
import { Space } from '../../components/Space';
// import { MessageCard } from './Components/MessageCard';
import {getdir} from "./components/MessageCardUtil.js"
import {MessageCard} from "./components/MessageCard.js"

type Props = {
    chatnumber:Number
};
export function OpenChat(props: Props) {
  const [messages, setmessages] = React.useState([])
    let logo = <img 
    style={{
      width:"30%",
      height:"127%",
      position:"relative",
      top: "-9%",
      filter:"brightness(0%)"
    }}
    src={paw}/>
    /*get the messages*/
    
  return (
    <div 
    className="OpenChat">
    <Space 
      className="Chat-navbar"
      inner={[logo]}
      />
    <div
    id="message-container"
    className='messages-container pool-div'>
      {messages}
    </div>
    {/*bottom part */}
    <div
    className='bottom-chat-input'>
      <Space   
      height="100%"
      width="82%"
      left="2%"
      top="0%"
      style={{
        position:"absolute",
        boxShadow:"0 0 10px rgba(0,0,0,0.5)",
        borderRadius:"15px",
        overflow:"hidden"
      }}   
      className="ff" 
      inner={[ 
      <textarea 
      id="text-input"
      dir='auto'
      className='chat-input'
      ></textarea>]}
    />

      <div 
      onClick={async (e)=>{
        const input = document.getElementById("text-input")
        const text = input.value
        if (text === "") return
        input.value = ""
        const langdir = await getdir(text)
        setmessages(m=>[...m,<MessageCard langdir={langdir} direction={false} key={Math.random()} text={text}/>])
        console.log(text)
      }}
      className='send-button'>
        send
      </div>
    </div>
    </div>
  );

};