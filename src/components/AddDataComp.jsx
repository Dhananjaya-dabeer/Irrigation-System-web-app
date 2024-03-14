import React from "react";
import style from "../styles/AddDataComp.module.css";
const AddDataComp = () => {
  return (
    <div className={style.parent}>
      <div className={style.fieldComp}>
        <div className={style.plots}>
          <h4>Number of Plots to be irrigated - ex 1(D1) 2(D2) ... </h4>
          <input type="text" placeholder="Plots" />
        </div>
        <div className={style.runBy}>
          <h4>
            How many motors can be run in parallel? - ex if 1(M1), if 2 (M2)
          </h4>
          <input type="text" />
        </div>
        <div className={style.startTime}>
          <h4>Irrigation Start Time - Eg: 060000 (Time in military format)</h4>
          <input type="number" />
        </div>
        <div className={style.endTime}>
          <h4>Irrigation End Time - Eg: 190000 (Time in military format)</h4>
          <input type="number" />
        </div>
        <div className={style.MotorRunTime}>
          <h4>Motor Runtime - Say in minutes</h4>
          <input type="number" />
        </div>
        <div className={style.cycleInterval}>
          <h4>
            Irrigation Cycle Interval - Say in minutes (Rest time between
            irrigation cycles)
          </h4>
          <input type="number" />
        </div>
        <div className={style.add}>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddDataComp;
