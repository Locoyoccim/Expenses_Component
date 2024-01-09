import React, { useEffect, useState } from "react";
import Top from "/src/components/Top.jsx";
import "/src/styles/app.css";
import Bar from "/src/components/Bar.jsx";
import Data from "/data.json";

function App() {
  console.log(Data);

  return (
    <>
      <section>
        <Top description="My balance" total="921.48"></Top>
        <div className="details_container">
          <h2>Spending - Last 7 days</h2>
          <div className="main">
            <Bar
              day={Data[0].day}
              height={Data[0].amount * 3}
              displayer={Data[0].amount}
            />
            <Bar
              day={Data[1].day}
              height={Data[1].amount * 3}
              displayer={Data[1].amount}
            />
            <Bar
              day={Data[2].day}
              height={Data[2].amount * 3}
              displayer={Data[2].amount}
            />
            <Bar
              day={Data[3].day}
              height={Data[3].amount * 3}
              displayer={Data[3].amount}
            />
            <Bar
              day={Data[4].day}
              height={Data[4].amount * 3}
              displayer={Data[4].amount}
            />
            <Bar
              day={Data[5].day}
              height={Data[5].amount * 3}
              displayer={Data[5].amount}
            />
            <Bar
              day={Data[6].day}
              height={Data[6].amount * 3}
              displayer={Data[6].amount}
            />
          </div>
          <hr />
          <div className="footer">
            <div>
              <p className="this_month">Total this month</p>
              <span className="total">$478.33</span>
            </div>
            <div className="container2">
              <p className="porcent">+2.4%</p>
              <span className="month">from las month</span>
            </div>
          </div>
        </div>
      </section>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Calos Hernandez</a>.
      </div>
    </>
  );
}

export default App;
