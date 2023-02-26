import { useState, useRef, useEffect } from 'react';
import './Card.css';

function Card({ data }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [currentTranslate, setCurrentTranslate] = useState({ x: 0, y: 0 });
  const [previousTranslate, setPreviousTranslate] = useState({ x: 0, y: 0 });
  const cardsRef = useRef([]);
  useEffect(() => {
    if (currentTranslate.x > 150 && currentTranslate.x < 500) {
      handleSwipe("right");
      console.log("right");
    }
    if (currentTranslate.x < -150 && currentTranslate.x > -500) {
      handleSwipe("left");
      console.log("left");
    }
  }, [currentTranslate.x, currentTranslate.y]);
  function dragStart(event) {
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

  function dragEnd() {
    setPreviousTranslate(currentTranslate);
    setIsDragging(false);
    let margin = 250
    if (currentTranslate.x<margin && currentTranslate.x > -margin) 
    {
      setStartPosition({x:0,y:0})
      setCurrentTranslate({x:0,y:0})
      setPreviousTranslate({x:0,y:0})
      cardsRef.current[currentCardIndex].style.cssText = `transform: translate(0px, 0px); transition: transform 0.5s;`;
    }
  }

  function drag(event) {
    if (isDragging) {
      // event.preventDefault();
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
      setCurrentTranslate({
        x: (previousTranslate.x + currentPosition.x - startPosition.x)*1.2,
        y: (previousTranslate.y + currentPosition.y - startPosition.y)*1.2,
      });
      cardsRef.current[currentCardIndex].style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px)`;
    }
  }
  function handleSwipe(direction) {
    const card = cardsRef.current[currentCardIndex];
    card.style.transition = 'transform 0.3s ease-in-out';
    switch (direction) {
      case 'left':
        card.style.transform = `translate(-1000px, 0) rotate(-30deg)`;
        break;
      case 'right':
        card.style.transform = `translate(1000px, 0) rotate(30deg)`;
        break;
      case 'up':
        card.style.transform = `translate(0, -1000px) rotate(30deg)`;
        break;
      case 'down':
        card.style.transform = `translate(0, 1000px) rotate(-30deg)`;
        break;
      default:
        break;
    }
    // setCurrentCardIndex(currentCardIndex + 1);
  }

  return (
    <div className="card-container"
         ref={(el) => cardsRef.current[currentCardIndex] = el}
         onTransitionEnd={() => {
            cardsRef.current[currentCardIndex].style.transition = '';
        }}
         onMouseDown={dragStart}
         onMouseUp={dragEnd}
         onMouseMove={drag}
         onTouchStart={dragStart}
         onTouchEnd={dragEnd}
         onTouchMove={drag}
         onMouseLeave={dragEnd}
         onTouchCancel={dragEnd}
         onTouchLeave={dragEnd}>
      {data.map((item, index) => (
        <div className="card"
             key={index}>
          {item}
          <div className="card-action">
            <button onClick={() => handleSwipe('left')}>Nope</button>
            <button onClick={() => handleSwipe('right')}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
