import React, { useContext, useEffect, useState } from "react";
import style from "../styles/AddDataComp.module.css";
import dataContext from "../context/dataContext";
const AddDataComp = () => {
  const { data, setData } = useContext(dataContext);
  const { popup, setPopup } = useContext(dataContext);
  const statusArray = ["Done", "In Progress", "Pending"];
  const index = Math.ceil(Math.random() * 2);
  const [irrigationInfo, setIrrigationInfo] = useState({
    id: data.length + 1,
    plot: "",
    motor: "",
    startTime: "",
    endTime: "",
    runtime: "",
    interval: "",
    status: statusArray[index],
  });
  const dataAddHandler = () => {
    if (
      !irrigationInfo.plot ||
      !irrigationInfo.motor ||
      !irrigationInfo.startTime ||
      !irrigationInfo.endTime ||
      !irrigationInfo.runtime ||
      !irrigationInfo.interval
    ) {
      alert("all fields are required");
      return;
    }
    if (!irrigationInfo.plot.startsWith("D")) {
      alert(
        "Please add plot in-terms of D for 1 plot D1 and for 2 plots D2 and so on"
      );
      return;
    }
    if (!irrigationInfo.motor.includes("M")) {
      alert(
        "Please add motors in-terms of M for 1 motor M1 and 2 motors M2 so on"
      );
      return;
    }
    if (
      !(irrigationInfo.startTime.length === 6) ||
      !(irrigationInfo.endTime.length === 6)
    ) {
      alert(
        "the time factor Start TIme and End Time should be in military format"
      );
      return;
    }
    setData((prevData) => [...prevData, irrigationInfo]);
    setPopup(false);
  };
  useEffect(() => {
    setIrrigationInfo({
      id: data.length + 1,
      plot: "",
      motor: "",
      startTime: "",
      endTime: "",
      runtime: "",
      interval: "",
      status: statusArray[index],
    });
  }, [popup]);
  return (
    <div className={style.parent} onClick={(e) => e.stopPropagation()}>
      <div className={style.fieldComp}>
        <div className={style.plots}>
          <h4>Number of Plots to be irrigated - ex if 1 (D1) if 2 (D2) ... </h4>
          <input
            type="text"
            onChange={(e) =>
              setIrrigationInfo({ ...irrigationInfo, plot: e.target.value })
            }
            value={irrigationInfo.plot}
          />
        </div>
        <div className={style.runBy}>
          <h4>
            How many motors can be run in parallel? - ex if 1(M1), if 2 (M2)
          </h4>
          <input
            type="text"
            onChange={(e) =>
              setIrrigationInfo({ ...irrigationInfo, motor: e.target.value })
            }
            value={irrigationInfo.motor}
          />
        </div>
        <div className={style.startTime}>
          <h4>
            Irrigation Start Time - Eg: 060000(6:00AM) (Time in military format)
          </h4>
          <input
            type="number"
            onChange={(e) =>
              setIrrigationInfo({
                ...irrigationInfo,
                startTime: e.target.value,
              })
            }
            value={irrigationInfo.startTime}
          />
        </div>
        <div className={style.endTime}>
          <h4>
            Irrigation End Time - Eg: 190000(7:00 PM) (Time in military format)
          </h4>
          <input
            type="number"
            onChange={(e) =>
              setIrrigationInfo({ ...irrigationInfo, endTime: e.target.value })
            }
            value={irrigationInfo.endTime}
          />
        </div>
        <div className={style.MotorRunTime}>
          <h4>Motor Runtime - Say in minutes</h4>
          <input
            type="number"
            onChange={(e) =>
              setIrrigationInfo({
                ...irrigationInfo,
                runtime: e.target.value,
              })
            }
            value={irrigationInfo.runtime}
          />
        </div>
        <div className={style.cycleInterval}>
          <h4>
            Irrigation Cycle Interval - Say in minutes (Rest time between
            irrigation cycles)
          </h4>
          <input
            type="number"
            onChange={(e) =>
              setIrrigationInfo({
                ...irrigationInfo,
                interval: e.target.value,
              })
            }
            value={irrigationInfo.interval}
          />
        </div>
        <div className={style.add}>
          <button onClick={dataAddHandler}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddDataComp;
