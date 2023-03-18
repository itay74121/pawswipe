import "./Chat.css"
import paw from "../../paw.png"
import {Space} from "../../components/Space.js"
// @flow
import * as React from 'react';
import { ChatCard } from "./Components/ChatCard";
import data from "../Dashboard/testdata.json"

type Props = {
  
};
export function Chat(props: Props) {


    let logo = <img 
    style={{
      width:"30%",
      height:"127%",
      position:"relative",
      top: "-9%",
      filter:"brightness(0%)"
    }}
    src={paw}/>
    let chats = data.urls.map(url=>{
      return(
      <ChatCard 
      image={url}
      name="doggo"
      message="Wuff Woof"
      />)
    })
    let chats2 = [...chats].sort(a=>0.5-Math.random())

  return (
    <div 
    className="Chat">
    <Space 
      className="Chat-navbar"
      inner={[logo]}
      />
      <div
      className="chat-container">
        {chats2}
      </div>
      {/* 
      {cards}
      <Space 
      className="Chat-navbar-bottom"
      inner={[chatlogoimg,profilelogoimg]}
      /> */}
    </div>
  );
};






