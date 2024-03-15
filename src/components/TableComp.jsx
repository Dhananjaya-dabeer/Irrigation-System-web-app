import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import dataContext from "../context/dataContext";
import style from "../styles/TableComp.module.css";
const TableComp = () => {
  const { data } = useContext(dataContext);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "plot",
      headerName: "Plot",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "motor",
      headerName: "Motor",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "startTime",
      headerName: "Start Time",
      type: "number",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "endTime",
      headerName: "End Time",
      type: "number",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "runtime",
      headerName: "Run Time",
      type: "number",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interval",
      headerName: "Interval",
      type: "number",
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "100vh",
    // }}
    >
      <div style={{ height: 500 }}>
        <DataGrid
          style={{ borderRadius: "18px", background: "white" }}
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7, 5, 10]}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
              // color: ,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TableComp;
