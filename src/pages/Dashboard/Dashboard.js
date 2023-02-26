import "./Dashboard.css"
import paw from "../../paw.png"
import {Space} from "../../components/Space.js"
// @flow
import * as React from 'react';
import Card from "./components/Card";
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

      React.useEffect(() => {
        function handleScroll() {
          window.scrollTo(0, 0);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="Dashboard">
      <Space 
      className="dashboard-navbar"
      inner={[logo]}
      />
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>my</div>]}/>
      <Card data={[<div>life</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>fuck</div>]}/>
      <Card data={[<div>please</div>]}/>
    </div>
  );
};






