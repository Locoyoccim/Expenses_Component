import React from "react";
import "/src/styles/bar.css";

function Bar({ day, height, displayer }) {
  return (
    <>
      <div className="bar_container">
        <div className="price_display">${displayer}</div>
        <div className="barra" style={(innerHeight = { height })}></div>
        <p className="day_style">{day}</p>
      </div>
    </>
  );
}

export default Bar;
