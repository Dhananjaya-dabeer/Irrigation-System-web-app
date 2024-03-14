import React, { useState } from "react";
import TableComp from "../components/TableComp";
import style from "../styles/TablePage.module.css"
import AddDataComp from "../components/AddDataComp"
function TablePage() {
  const[popup, setPopup] = useState(false)

  const addDataHandler = (e) => {
    setPopup(!popup);
    e.stopPropagation();
    
  }

  return <div className={style.parent} onClick={() => setPopup(false)} >
    <TableComp/>
    <div className={style.add_btn}>
      <button onClick={(e) => addDataHandler(e)}>Add+</button>
    </div>
   <div className={popup ? `${style.dataComponent}` : `${style.displayNone}`} onClick={(e) => e.stopPropagation()}>
   <AddDataComp/>
   </div>
  </div>;
}

export default TablePage;
