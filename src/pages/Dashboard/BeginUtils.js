import { TextSpace } from "../../components/TextSpace";
import AgeRuler from "./components/AgeRuler";



export function Beginmap(e,age1,age2){
    if (e.type === 'display-ages')
    {
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
    if (e.type === 'ruler'){
      return(
      <div 
      id="age-ruler"
      className="age-ruler">
        <AgeRuler age= "age1"/>
        <AgeRuler age= "age2" />
      </div>
      )
    }
    return <TextSpace 
    height={""+e.type==="bio"?"30%":""}
    width=""
    top=""
    left=""
    placeholder={e.name}
    className={"intro-user-input"} 
    multiline={e.type==="bio"}/>
  }



