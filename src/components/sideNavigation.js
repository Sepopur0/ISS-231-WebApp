import React, { useState } from "react";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { FaUser, FaCreditCard,FaKey, FaInfo, FaHistory, FaThList} from "react-icons/fa";
import { HiUserGroup,HiMagnifyingGlass } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import './common.css'
export default function SideNavigation({ isUserHR }) {

    const [collapsed, setCollapsed] = useState(false);
    const [focus, setFocus]=useState(null);
    const checkActive = (isActive) => {
        return isActive==focus ? "activeSidenav" : "sidenav";
    }
    return (
        <div className="side-nav">
            <Sidebar onBackdropClick={() => { setCollapsed(true); }} collapsed={collapsed} style={{backgroundColor:'white'}}>
                <h3 className="sidenav-category">Employee Center</h3>
                <Menu>
                    <h4 className="sidenav-category">Cá nhân</h4>
                    <MenuItem  icon={<FaUser />} component={<NavLink to={"/profile"} className={checkActive(1)} onClick={()=>{setFocus(1);}}/>}>Thông tin cá nhân</MenuItem>
                    <MenuItem icon={<FaCreditCard/>} component={<NavLink to={"/workHistory"} className={checkActive(2)} onClick={()=>{setFocus(2);}} />}>Lương và vị trí</MenuItem>
                    <MenuItem icon={<FaKey />} component={<NavLink to={"/profile/changePassword"} className={checkActive(3)} onClick={()=>{setFocus(3);}}/>}>Đổi mật khẩu</MenuItem>

                    <h4 className="sidenav-category">Tổ chức</h4>
                    <MenuItem icon={<HiUserGroup/>}  component={<NavLink to={"/recruit"} className={checkActive(4)} onClick={()=>{setFocus(4);}}/>}>Hội đồng tuyển dụng</MenuItem>
                    <MenuItem icon={<FaInfo />} component={<NavLink to={"/about"} className={checkActive(5)} onClick={()=>{setFocus(5);}} />}>Thông tin chung</MenuItem>

                    {isUserHR ?
                        <>
                            <h4 className="sidenav-category">Quản lý nhân sự</h4>
                            <MenuItem icon={<FaHistory />} component={<NavLink to={"/hr/auditing"} className={checkActive(6)} onClick={()=>{setFocus(6);}} />}>Lịch sử hoạt động</MenuItem>
                            <MenuItem icon={<ImStatsDots/>} component={<NavLink to={"/hr/dashboard"} className={checkActive(7)} onClick={()=>{setFocus(7);}} />}>Thống kê chung</MenuItem>
                            <MenuItem icon={<FaThList/>} component={<NavLink to={"/hr/users"} className={checkActive(8)} onClick={()=>{setFocus(8);}}/>}>Danh sách người dùng</MenuItem>
                            <MenuItem icon={<HiMagnifyingGlass/>} component={<NavLink to={"/hr/userDetail"} className={checkActive(9)} onClick={()=>{setFocus(9);}} />}>Chi tiết người dùng</MenuItem>
                        </>
                        : null}
                </Menu>
            </Sidebar>
        </div>
    )
}

