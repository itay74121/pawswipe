// @flow
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Space } from '../../components/Space';
import { TextSpace } from '../../components/TextSpace';
import "./Register.css"
type Props = {

};
export function Register(props: Props) {
    let registertext = <a className='registertext'>Register</a>
    let nav = useNavigate()
    let fields = [
        "UserName",
        "Password",
        "Confirm Password"
      ].map((e)=>{
        return <TextSpace 
        height=""
        width=""
        top=""
        left=""
        placeholder={e}
        className="register-user-input"/>
      });
      
  return (
    <div className='Register'>
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
            nav("/")
        }}
        inner={[registertext]}
        />
      <div className='register-user-container'>
        {fields}
      </div>
      <div className='terms'>
        <input type="checkbox" className='checkbox'/>
        <a className='terms-text'>Agree to terms and services</a>
      </div>

    </div>
  );
};