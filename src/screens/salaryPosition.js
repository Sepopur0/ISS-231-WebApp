import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import DataTable from "react-data-table-component";
import './common.css'
export default function SalaryPosition() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([
        { workplace: "Ho Chi Minh", position: 'Junior Developer', department:"Software Department", startDate: "16/8/2016", endDate: "19/7/2019", salary:13000000},
        { workplace: "Ho Chi Minh", position: 'Senior Developer', department:"Software Department", startDate: "20/7/2019", endDate: "10/1/2023", salary:29000000},
        { workplace: "Ho Chi Minh", position: 'Vice Manager', department:"Software Department", startDate: "11/1/2023", endDate: "TBD", salary:39000000},
    ])
    const [reloadTrigger, setReloadTrigger] = useState(false);
    useEffect(() => {
        ///get audit data

    }, [reloadTrigger])
    const columns = [
        {
            name: 'Nơi làm việc',
            selector: row => row.workplace,
        },
        {
            name: 'Vị trí',
            selector: row => row.position,
        },
        {
            name: 'Phòng ban',
            selector: row => row.department,
        },
        {
            name: 'Thời gian bắt đầu',
            selector: row => row.startDate,
        },
        {
            name: 'Thời gian kết thúc',
            selector: row => row.endDate,
        },
        {
            name: 'Lương',
            selector: row => row.salary,
        },
    ];

    return (
        <div>
            <div className="common-header">
                <h3>Lịch sử làm việc</h3>
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