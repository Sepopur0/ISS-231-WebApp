import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DataTable from "react-data-table-component";
import StatBox from "../components/StatBox";
import PersonIcon from '@mui/icons-material/Person';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ProgressCircle from "../components/ProgressCircle";
//tổng số nhân viên, tổng số phòng ban, biểu đồ số nhân viên trong phòng ban, bảng số nhân viên đc cấp quyền audit
export default function HRDashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState({})
  const data_column=[
    {
      name: 'Tên phòng ban',
      selector: row => row.name,
  },
  {
      name: 'Mã số phòng ban',
      selector: row => row.deptID,
      sortable: true,
  },
  {
    name: 'Số nhân viên nam',
    selector: row => row.totalMale,
    sortable: true,
},
{
    name: 'Sô nhân viên nữ',
    selector: row => row.totalFemale,
    sortable: true,
},
{
  name: 'Tổng số nhân viên',
  selector: row => row.totalEmp,
  sortable: true,
},
  ]
  const mock_dept_data=[
    {name:"Software Department", deptID:13443,totalMale:190,totalFemale:45,totalEmp:235},
    {name:"Hardware Department", deptID:12443,totalMale:150,totalFemale:65,totalEmp:215},
    {name:"Design Department", deptID:10120,totalMale:100,totalFemale:70,totalEmp:170},
    {name:"Marketing Department", deptID:8200,totalMale:65,totalFemale:80,totalEmp:145},
    {name:"HR Department", deptID:10000,totalMale:40,totalFemale:105,totalEmp:145}
  ]
  useEffect(() => {
    /*set Data, including:
    - total employee
    - total departments
    -total male employee
    -total female employee
    - employee (male,female) in each department
    */
    console.log(data.totalEmp)
  }, [])
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <h3>Thống kê chung</h3>
          <h5>Thống kê thông tin về người dùng, phòng ban</h5>
        </div>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.totalEmp ? data.totalEmp : 1000}
            subtitle="Tổng số nhân viên"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.totalDept ? data.totalDept : 16}
            subtitle="Tổng số phòng ban"
            icon={
              <MeetingRoomIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
        /> {/*filler*/}

        {/* Sex */}
        <Box
          gridColumn="span 3"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Giới tính
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
            mt="25px"
          >
            <ProgressCircle size="150" total={data.totalEmp ? data.totalEmp : 1000} extra={"Nhân viên"} progress={(data.totalMale && data.totalFemale ? (data.totalMale / (data.totalEmp)) : 0.6)} />
            <Box 
            display="flex"
            flexDirection="column"
            width="80%"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    Nam
                  </Typography>
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {data.totalMale ? data.totalMale : 600}
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.blueAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    Nữ
                  </Typography>
                </Box>
                <Box
                  backgroundColor={colors.blueAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {data.totalFemale ? data.totalFemale : 400}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Table */}
        <Box
          gridColumn="span 9"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
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
          <DataTable columns={data_column} data={mock_dept_data} pagination responsive />
        </Box>
      </Box>
    </Box>
  );
}