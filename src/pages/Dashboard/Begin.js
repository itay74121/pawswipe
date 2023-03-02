import {useRef, useState} from "react"
import "./Begin.css"
import paw from "../../paw.png"
import { Space } from '../../components/Space';
import { TextSpace } from '../../components/TextSpace';
import AgeRuler from "./components/AgeRuler";
import { useSelector } from "react-redux";
import { Beginmap } from "./BeginUtils";

type Props = {
  setBegin:Function
};

export function Begin(props: Props) {
    const [isDragging, setIsDragging] = useState(false);
    const [starttouch,setStartTouch] = useState({x:0,y:0})
    const [draggingpositon, setDraggingPosition] = useState({x:0,y:0})
    const [previousTranslate, setPreviousTranslate] = useState({ x: 0, y: 0 });
    const [index,setindex] = useState(0)
    const [direction,setDirection] = useState(null)
    const age1 = useSelector(s=>s.age1)
    const age2 = useSelector(s=>s.age2)

    let inputref = useRef(null)
    const fields = [
        [{ name: 'DogName', type: 'text', required: true }, /*Questions about the dog */
         {name:'Nickname',type:'text',required:true},
         { name: 'Dog age', type: 'Number', required: true },
         { name: 'City', type: 'text', required: true },
         { name: 'Bio', type: 'bio', required: true }],
        [ {name:"Age",type:"display-ages", required:true}
          ,{ name: 'Age', type: 'ruler', required: true }], /*Dog prefrences*/
        [{ name: 'City', type: 'text', required: true }],
        [{ name: 'Lifestyle', type: 'text', required: true }],
      ][index].map((e)=>{
        return Beginmap(e,age1,age2)
      })
    let logo = <img 
    style={{
      width:"30%",
      height:"127%",
      position:"relative",
      top: "-9%",
      filter:"brightness(0%)"
    }}
    src={paw}/>
    const ontouchstart = (e)=>{
        if(e.target.className==="age-ruler" || e.target.className === "age-range") return
        inputref.current.style.transition = "";
        try {
          const x = e.touches[0].clientX;
          const y = e.touches[0].clientY;
          setStartTouch({x:x,y:y})
          setIsDragging(true)
        }
        catch{
          return
        }

    }
    const onDrag = (e) => {
        if (!isDragging) {
          return;
        }
      
        const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const y = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
      
        const dx = x - starttouch.x;
        const dy = (y - starttouch.y)*0;
      
        setDraggingPosition({
          x: previousTranslate.x + dx,
          y: previousTranslate.y + dy,
        });
        let sign = draggingpositon.x >= 0 ? "-" : "+";
        let margin = window.innerWidth*0.5
        if (draggingpositon.x>margin || draggingpositon.x < -1*margin)
        {
            setDirection(sign==="+")
        }
        else{
          setDirection(null)
        }
        inputref.current.style.transform = `translate(${draggingpositon.x}px, ${draggingpositon.y}px)`;
        // inputref.current.style.transition = "transform 0.09s ease-in-out, rotate 0.09s ease-in-out";
   };
      
    const onTouchEnd = (e)=>{
        // setPreviousTranslate(draggingpositon);
        setIsDragging(false)
        let flag = false
        if(draggingpositon.x === 0) flag = true
        setDraggingPosition({x:0,y:0})
        setStartTouch({x:0,y:0})
        if (flag) return
        inputref.current.style.transform = `translate(${0}px, ${0}px)`;
        inputref.current.style.transition = "transform 0.3s ease-in-out";
        function mod(n, m) {
            return ((n % m) + m) % m;
        }
        if(direction!=null && direction === true)
        {
            setindex(index=>mod(index+1,4))
        }
        if(direction!=null && direction === false)
        {
            setindex(index=>mod(index-1,4))
        }
    }
    let dots = ["x","x","x","x"].map((x,i)=>{
        return <Space 
        height="53%"
        width="4.5%"
        style={{
            background: (i===index)?"maroon":"white",
            borderRadius:"50%",
            boxShadow: "0 0 10px black"
        }}
        />
    })
    let message = ""
    switch(index){
      case 0:
        message = "Lets get to know each other!"
        break
      case 1:
        message = "your dog's prefrences?"
        break
    }
    //////////////////////////////////////////////////////

  return (
    <div className='Begin'>
    <Space 
      className="dashboard-navbar"
      inner={[logo]}
      />
      <a className='intro-header' >{message}</a>
    <div 
        ref={inputref}
        onMouseDown={ontouchstart}
        onMouseUp={onTouchEnd}
        onMouseMove={onDrag}
        onTouchStart={ontouchstart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onDrag}
        onMouseLeave={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onTouchLeave={onTouchEnd}
    className='scroller'>
        {fields}
    </div>
    <Space 
    className="bottom-index"
    inner={dots}
    />
    {index === 3 &&
    <Space
    width="30vw"
    height="5vh"
    top="80vh"
    left="35vw"
    className="begin-continue-button"
    OnClick={(e)=>{
      props.setBegin(false)
    }}
    inner={[<a>continue</a>]}
    />}
    </div>
  );
};