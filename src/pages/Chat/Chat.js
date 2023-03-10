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
<<<<<<< HEAD
    data.url = data.urls.map(async url=>{
      return await fetch(url)
    })
=======
>>>>>>> d257d4c7e54b3b14f603fdef58c554db14c5f56c
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
    style={{
      height:document.documentElement.clientHeight
    }}
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






