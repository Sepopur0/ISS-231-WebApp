import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Button from "react-bootstrap/Button";

import DataTable from "react-data-table-component";
import './profilePage.css'
export default function profilePage() {
    const [data, setData] = useState([
        { name: "Anom Peterson", workplace: "Headquarter", address: "Saigon", position: "staff", phonenumber: "042515241", salary: "10000000" },
    ])
    const [reloadTrigger, setReloadTrigger] = useState(false);
    useEffect(() => {
        ///get user data

    }, [reloadTrigger])
    const columns = [
        {
            name: 'Họ và Tên',
            selector: row => row.name,
        },
        {
            name: 'Nơi làm việc',
            selector: row => row.workplace,
        },
        {
            name: 'Địa chỉ',
            selector: row => row.address,
        },
        {
            name: 'Vị trí',
            selector: row => row.position,
        },
        {
            name: 'Số điện thoại',
            selector: row => row.phonenumber,
        },
        {
            name: 'Lương tháng',
            selector: row => row.oldValue,
        },
    ];
    const sortItem = (direction, format) => {

    }

    return (
        <div>
            <div className="profile-page">
                <h1>Thông tin cá nhân</h1>
                <div>
                    <Button variant="primary" className="btn-success" onClick={() => { setReloadTrigger(!reloadTrigger) }}>Refresh</Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} pagination responsive />
        </div>)
}