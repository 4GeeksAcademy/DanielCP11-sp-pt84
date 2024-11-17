import React from 'react'



const Lamp = ({color, isOn, onClick}) => {  
  let styleLamp={
        marginLeft: "0.5em",
        width: "2em",
        height: "2em",
        borderRadius: "50%",
        opacity: "50%",
        background: color
    };  

  return (
    <div className={`${isOn ? "opacity-100" : ""}`} style={styleLamp} onClick={onClick}>
        
    </div>
  )
}

export default Lamp