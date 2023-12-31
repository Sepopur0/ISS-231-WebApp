import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import DataTable from "react-data-table-component";
import './common.css'
export default function AuditForHR() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([
        { name: "Anom Peterson", employeeID: '2324', date: "16/11/2023", action_type: "Delete", table: "Employee", field: "birthday", oldValue: "", newValue: "22" },
        { name: "Lê Văn Nhân", employeeID: '2372', date: "6/12/2023", action_type: "Edit", table: "Employee", field: "name", oldValue: "", newValue: "14" },
        { name: "Bùi Thanh Việt", employeeID: '1324', date: "23/11/2023", action_type: "Add", table: "Employee", field: "CCCD", oldValue: "", newValue: "17" },
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
            name: 'Ngày thực hiện',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Hành động',
            selector: row => row.action_type,
        },
        {
            name: 'Bảng',
            selector: row => row.table,
        },
        {
            name: 'Trường',
            selector: row => row.field,
        },
        {
            name: 'Giá trị cũ',
            selector: row => row.oldValue,
        },
        {
            name: 'Giá trị mới',
            selector: row => row.newValue,
        },
    ];

    return (
        <div>
            <div className="common-header">
                <h3>Lịch sử hoạt động</h3>
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