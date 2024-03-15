import React, { useContext, useState } from "react";
import TableComp from "../components/TableComp";
import style from "../styles/TablePage.module.css";
import AddDataComp from "../components/AddDataComp";
import dataContext from "../context/dataContext";
function TablePage() {
  const { popup, setPopup } = useContext(dataContext);

  const addDataHandler = (e) => {
    setPopup(!popup);
    e.stopPropagation();
  };

  return (
    <div className={style.parent} onClick={() => setPopup(false)}>
      <div className={style.table}>
        <TableComp />
      </div>
      <div className={style.add_btn}>
        <button onClick={(e) => addDataHandler(e)}>Add+</button>
      </div>
      <div
        className={popup ? `${style.dataComponent}` : `${style.displayNone}`}
      >
        <AddDataComp  />
      </div>
    </div>
  );
}

export default TablePage;
