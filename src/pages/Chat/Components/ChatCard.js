// @flow
import * as React from 'react';
import "./ChatCards.css"
import { useNavigate } from "react-router-dom";

type Props = {
    image:String,
    name:String,
    message:String

};
export function ChatCard(props: Props) {
  let nav = useNavigate()
  return (
    <div 
    className='chat-card'
    onClick={()=>{
      nav("/openchat")
    }}>
      <div
      className='image-container'
      >
      <img 
      className='chat-image'
      src={props.image}
      />
      </div>
      <a
        className='chat-name'
      >{props.name}</a>
      <a
        className='last-message'
      >{props.message.slice(0,15)}...</a>
    </div>
  );
};