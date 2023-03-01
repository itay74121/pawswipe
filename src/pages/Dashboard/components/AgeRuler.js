import React, { useState,useRef } from "react";
import "./AgeRuler.css"

const AgeRuler = () => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [currentTranslate, setCurrentTranslate] = useState({ x: 0, y: 0 });
  const [previousTranslate, setPreviousTranslate] = useState({ x: 0, y: 0 });
  const rulerref = useRef();
  const handleMinAgeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < maxAge) {
      setMinAge(value);
    }
  };

  const handleMaxAgeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > minAge) {
      setMaxAge(value);
    }
  };
  const dragStart = (event)=>{
    if (event.target.className !== "age-range") return
    if (event.type === 'touchstart') {
        setStartPosition({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        });
      } else {
        setStartPosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
      setIsDragging(true);
  }
  const drag = (event)=>{
    if (event.target.className !== "age-range") return
    if (isDragging){
        let currentPosition = { x: 0, y: 0 };
        if (event.type === 'touchmove') {
          currentPosition = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          };
        } else {
          currentPosition = {
            x: event.clientX,
            y: event.clientY,
          };
        }
        let bounderies = (document.getElementById("age-ruler").clientWidth - document.getElementById("marker").clientWidth)/2 + 10
        let translate = previousTranslate.x + currentPosition.x - startPosition.x
        if(translate>bounderies || translate < bounderies*-1) return

        setCurrentTranslate({
          x: (previousTranslate.x + currentPosition.x - startPosition.x)*1,
          y: (previousTranslate.y + currentPosition.y - startPosition.y)*0,
        });
        console.log(currentTranslate.x)
        rulerref.current.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px)`;
    }
  }
  const dragEnd = (e)=>{
    setPreviousTranslate(currentTranslate);
    setIsDragging(false);
  }

  return (
    <div
    id="marker"
    ref={rulerref}
    className="age-range"
    onMouseDown={dragStart}
    onMouseUp={dragEnd}
    onMouseMove={drag}
    onTouchStart={dragStart}
    onTouchEnd={dragEnd}
    onTouchMove={drag}
    onMouseLeave={dragEnd}
    onTouchCancel={dragEnd}
    onTouchLeave={dragEnd}>
    </div>
  );
};

export default AgeRuler;
