import "./Dashboard.css"
import paw from "../../paw.png"
import {Space} from "../../components/Space.js"
// @flow
import * as React from 'react';
import Card from "./components/Card";
import testdata from "./testdata.json"
import chaticon from "../../chaticon.jpg"
import profileicon from "../../profileicon.png"
type Props = {
  
};
export function Dashboard(props: Props) {
  let logo = <img 
      style={{
        width:"30%",
        height:"127%",
        position:"relative",
        top: "-9%",
        filter:"brightness(0%)"
      }}
      src={paw}/>
  let chatlogoimg = <img
      className="bottom-navbar-icons"
      style={{
        height:"100%",
        width:"auto",
        mixBlendMode:"darken",
        filter:"initial"
      }}
      src={chaticon}
    />
    let profilelogoimg = <img
    className="bottom-navbar-icons"
    style={{
      height:"100%",
      width:"auto",
      mixBlendMode:"difference",
      filter:"none"
    }}
    src={profileicon}
  />
      let cards = testdata.urls.map(url=>{
        return <Card data={[<img style={{
          width:"100%",
          height:"auto"
        }} src={url}/>]}/>
      })

  return (
    <div className="Dashboard">
      <Space 
      className="dashboard-navbar"
      inner={[logo]}
      />
      {cards}
      <Space 
      className="dashboard-navbar-bottom"
      inner={[chatlogoimg,profilelogoimg]}
      />
    </div>
  );
};






