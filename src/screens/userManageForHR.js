import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import DataTable from "react-data-table-component";
import './common.css'
export default function UserManageHR() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([
        { name: "Anom Peterson", employeeID: '2324', department: "Software Department", priviliges:"Delete-Employee \n Update-Employee"},
        { name: "Bùi Việt Hoàng", employeeID: '1521', department: "Software Department", priviliges:"Delete-Employee \n Update-Employee"},
    ])
    const [reloadTrigger, setReloadTrigger] = useState(false);
    useEffect(() => {
        ///get audit data

    }, [reloadTrigger])
    const columns = [
        {
            name: 'Tên',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Mã số nhân viên',
            selector: row => row.employeeID,
            sortable: true,
        },
        {
            name: 'Phòng ban',
            selector: row => row.department,
            sortable: true,
        },
        {
            name: 'Quyền được cấp',
            selector: row => row.priviliges,
        },
    ];

    return (
        <div>
            <div className="common-header">
                <h3>Danh sách người dùng</h3>
                <div>
                    <Button variant="primary" className="btn-success" onClick={() => { setReloadTrigger(!reloadTrigger) }}>Refresh</Button>
                </div>
            </div>
            <Box
            sx={{
                "& .rdt_Table *,.rdt_Pagination":{
                    backgroundColor:colors.primary[900],
                    color:colors.grey[100]
                },
                "& .rdt_Pagination svg":{
                    fill:colors.grey[100]
                }
            }}
            >
                <DataTable columns={columns} data={data} pagination responsive />
            </Box>

        </div>)
}