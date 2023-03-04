import GeneralInput from "../../components/GeneralInput";
import { TextSpace } from "../../components/TextSpace";
import AgeRuler from "./components/AgeRuler";




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






