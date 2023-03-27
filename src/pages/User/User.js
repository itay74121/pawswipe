// @flow
import * as React from 'react';
import "./User.css"
import paw from "../../paw.png"
import data from "../Dashboard/testdata.json"
type Props = {
  
};
export function User(props: Props) {
    let logo = <img 
    style={{
      width:"30%",
      height:"127%",
      position:"relative",
      top: "-9%",
      filter:"brightness(0%)"
    }}
    src={paw}/>

    const [imageData, setImageData] = React.useState(null);

    React.useEffect(() => {
      const fetchImageData = async () => {
        const response = await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS655Glj9RkHH_m1mWVebgVV34NrncdtmuX4qlI6YjDBzGwMB6vUlH_NJ-dSEr4NMW3gy0&usqp=CAU');
        const data = await response.blob();
        setImageData(URL.createObjectURL(data));
        console.log("fuck")
      };
  
      fetchImageData();
    }, []);
  


  return (
    <div
    className='User'>
      <div
      className='user-navbar'>
        {logo}
      </div>
      <div className='comp'>
        <div
        className='pro-con'>
        <div
        className='profile-pic-container'
        > {/*profile image*/}

        </div>
        <div
        className='profile-pic'>
        </div>
        {/* <div className='profile-image'/> */}
        <div 
        style={{
          backgroundImage:`url(${data.urls[0]})`,
          backgroundSize:"cover"
        }}
        className='profile-image'>
          {/* <img 
          className='the-image'
          onTouchStart={(e)=>{
            e.preventDefault()
          }}
          src={data.urls[0]}/> */}
        </div>
        </div>
        <div className='name-header'>Doggo</div>
        <div className='button-holder'> {/* button holder */}
          <div className='edit-button'> {/*edit profile */}
          <img 
          style={{
            width:"100%",
            height:"100%",
            mixBlendMode:"darken",
          }}
          src={imageData}></img>
          </div>
          <div className='settings-button'> {/* */}

          </div>
        </div> 
      </div>
    </div>
  );
};