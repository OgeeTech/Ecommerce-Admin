import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, productColumns, productRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ type }) => {
    const [data, setData] = useState(type === "users" ? userRows : productRows);
    const columns = type === "users" ? userColumns : productColumns;

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/${type}/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {type === "users" ? "Add New User" : "Add New Product"}
                <Link to={`/${type}/new`} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default Datatable;