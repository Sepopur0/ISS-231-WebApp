import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import DataTable from "react-data-table-component";
import './profilePage.css'
import { useTheme, Box, Typography,TextField } from "@mui/material";
import { tokens } from "../theme";
// const columns = [
//     {
//         name: 'Họ và Tên',
//         selector: row => row.name,
//     },
//     {
//         name: 'Nơi làm việc',
//         selector: row => row.workplace,
//     },
//     {
//         name: 'Địa chỉ',
//         selector: row => row.address,
//     },
//     {
//         name: 'Vị trí',
//         selector: row => row.position,
//     },
//     {
//         name: 'Số điện thoại',
//         selector: row => row.phonenumber,
//     },
//     {
//         name: 'Lương tháng',
//         selector: row => row.oldValue,
//     },
// ];
export default function ProfilePage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([
        { name: "Anom Peterson",email:"hello@gmail.com", workplace: "Ho Chi Minh", address: "Saigon", position: "staff", phonenumber: "042515241", salary: "10000000" },
    ])
    const [reloadTrigger, setReloadTrigger] = useState(false);
    useEffect(() => {
        ///get user data

    }, [reloadTrigger])

    return (
        <div>
            <div className="profile-page">
                <h3>Thông tin cá nhân</h3>
                <div>
                    <Button variant="primary" className="btn-success" onClick={() => { setReloadTrigger(!reloadTrigger) }}>Refresh</Button>
                </div>
            </div>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Họ và Tên"
                value={data[0].name}
                name="name"
                sx={{ gridColumn: "span 2" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                value={data[0].email}
                name="email"
                sx={{ gridColumn: "span 4" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nơi làm việc"
                value={data[0].workplace}
                name="workplace"
                sx={{ gridColumn: "span 2" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vị trí"
                value={data[0].position}
                name="position"
                sx={{ gridColumn: "span 4" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Số điện thoại"
                value={data[0].phonenumber}
                name="phone"
                sx={{ gridColumn: "span 4" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Lương tháng"
                value={data[0].salary}
                name="salary"
                sx={{ gridColumn: "span 4" }}
                disabled
              />
            </Box>
            
        </div>)
}