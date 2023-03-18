import './Home.css';
import { Space } from '../../components/Space.js';
import logo from "../../logo.png"
import { useNavigate } from 'react-router-dom';
function Home() {

  let image = <img className='logo' src={logo}></img>
  let logintext = <a className='logintext'>Login</a>
  let registertext = <a className='registertext'>Register</a> 
  let nav = useNavigate()
  const addressBarHeight = window.innerHeight - document.documentElement.clientHeight;
  return (
    <div 
    className="Home">
      <Space 
      height="43%"
      width="90%" 
      left="5%" 
      top="13%" 
      className = "shadows"
      style={{
        position:"absolute",
        background:"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        borderRadius:"15px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
      inner={[image]}
      />
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
      nav("/login")
    }}
    inner={[logintext]}
      />
      <Space 
      height="7%"
      width="80%" 
      left="10%" 
      top="80%" 
      className = "shadows hover"
      style={{
      position:"absolute",
      borderRadius:"15px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    }}
    OnClick={()=>{
      nav("/register")
    }}
    inner={[registertext]}
      />
    </div>
  );
}

export default Home;
