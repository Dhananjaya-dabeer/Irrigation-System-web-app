import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import dataContext from "../context/dataContext";

const TableComp = () => {
  const { data } = useContext(dataContext);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "plot",
      headerName: "Plot",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "motor",
      headerName: "Motor",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "startTime",
      headerName: "Start Time",
      type: "number",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "endTime",
      headerName: "End Time",
      type: "number",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "runtime",
      headerName: "Run Time",
      type: "number",
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interval",
      headerName: "Interval",
      type: "number",
      width: 160,
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
      width: 160,
      headerClassName: "header",
      cellClassName: "cell",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
            color: "white",
          },
        }}
      />
    </div>
  );
};

export default TableComp;
