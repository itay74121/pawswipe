// @flow
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Space } from '../../components/Space';
import { TextSpace } from '../../components/TextSpace';
import "./Login.css"
type Props = {
  
};
export function Login(props: Props) {
    let nav = useNavigate()
    let logintext = <a className='logintext'>Login</a>
  return (
    <div 
    style={{
      height:document.documentElement.clientHeight
    }}
    className='Login'>
        <Space
          height="7%"
          width="80%" 
          left="10%" 
          top="70%" 
          className = "shadows hover"
          style={{position:"absolute",
          borderRadius:"15px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}
        OnClick={()=>{
          nav("/dashboard")
        }}
        inner={[logintext]}
          />
      <div className='login-user-container'>
        <TextSpace 
        height=""
        width=""
        top=""
        left=""
        placeholder="Username"
        className="login-user-input"/>
        <TextSpace 
        height=""
        width=""
        top=""
        left=""
        placeholder="Password"
        className="login-user-input"/>
        <div className='terms'>
          <input type="checkbox" className='checkbox'/>
        <a className='terms-text'> Remember me</a>
      </div>
      </div>

    </div>
  );
};