import React, { useState } from "react";
import "./GeneralInput.css"
function GeneralInput({ label, options, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
    <div
    style={{
        width:"75%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        marginTop:"7%"
    }}>
      <label style={
    {
      fontFamily:"Staatliches",
      fontSize:"18px"
    }
  } htmlFor="option" onClick={(e)=>{e.preventDefault()}}>{label}:</label>
      <select 
      className="general-input"
      id="option" value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option 
          className="general-input-option"
          key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GeneralInput;
