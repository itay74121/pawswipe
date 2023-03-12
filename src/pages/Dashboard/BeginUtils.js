import GeneralInput from "../../components/GeneralInput";
import { Space } from "../../components/Space";
import { TextSpace } from "../../components/TextSpace";
import AgeRuler from "./components/AgeRuler";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export function header(e){
  return <a style={
    {
      fontFamily:"Staatliches",
      fontSize:"18px"
    }
  } >{e.text}</a>
}


export function agesLookingFor(e){
  return <a style={
    {
      fontFamily:"Staatliches",
      fontSize:"18px"
    }
  } >{e.text}</a>
}

export function options(e){
  return <GeneralInput label={e.label} onChange={e.onChange} options={e.options}/>
}


export function displayAges(e,age1,age2){
  let min = Math.min(Math.round(age1 * 30), Math.round(age2 * 30));
  let max = Math.max(Math.round(age1 * 30), Math.round(age2 * 30));
  return( 
  <div style={{
    flexDirection:"row",
    marginBottom:"15px",
    width:"75%"
  }}>
    <a className="age-label" style={{marginRight:"80%"}}>{min}</a>
    <a className="age-label" >{max}</a>  
  </div>)
}

export function ruler(e){
  return(
    <div 
    id="age-ruler"
    className="age-ruler">
      <AgeRuler age= "age1"/>
      <AgeRuler age= "age2" />
    </div>
    )
}


export function ageInput(e){
  return (
    <div style={{
      marginTop:"9%",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      textAlign:"center"
    }}>
    <a style={
    {
      fontFamily:"Staatliches",
      fontSize:"18px"
    }
  } >{e.text}</a>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker 
    sx={{
      "& .MuiOutlinedInput-root": {
        borderWidth: '5px',
        backgroundColor: 'white',
        height:"30px",
        textAlign:"center",
        borderRadius:'50px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
        "&:hover": {
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.9)',
        },
        "&.Mui-focused": {
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        }
      },
      "& .MuiInlinedInput-root":
      {
        border:"none"
      }
    }}
    className="owner-birth"
    label={e.label}
    />
    </LocalizationProvider>
    </div>
  )
}




export function defaultMap(e){
  return(
  <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
  <a style={
    {
      fontFamily:"Staatliches",
      fontSize:"18px"
    }
  } >{e.name}</a>
  <TextSpace 
  height={"30%"}
  width=""
  top=""
  left=""
  className={"intro-user-input"} 
  multiline={e.type==="bio"}/>
  </div>) 
}