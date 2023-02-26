import "./Dashboard.css"
import paw from "../../paw.png"
import {Space} from "../../components/Space.js"
// @flow
import * as React from 'react';
import Card from "./components/Card";
import testdata from "./testdata.json"

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
    </div>
  );
};






