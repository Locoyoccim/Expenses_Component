import React from "react";
import logo from "/src/assets/logo.svg"
import "/src/styles/top.css"

function Top({description, total}) {
  return (
    <>
      <div className="top_container">
        <div className="description_price">
            <p className="balance_word">{description}</p>
            <p className="total_container">${total}</p>
        </div>
        <div className="logo_container">
            <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </>
  );
}

export default Top;
