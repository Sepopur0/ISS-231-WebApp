import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
export default function SideNavigation({ isUserHR }) {

    const [collapsed, setCollapsed] = useState(false);
    const checkActive = (isActive) => {
        return isActive ? "activeSidenav" : "sidenav";
    }
    return (
        <div style={{  height:'100%', minHeight: '300px'}}>
            <Sidebar onBackdropClick={() => { setCollapsed(true); }} collapsed={collapsed}>
                <h2 >Employee Center</h2>
                <Menu>
                    <h3 className="sidenav-category">Cá nhân</h3>
                    <MenuItem component={<NavLink to={"/profile"} className={isActive => { checkActive(isActive) }} />}>Thông tin cá nhân</MenuItem>
                    <MenuItem component={<NavLink to={"/workHistory"} className={isActive => { checkActive(isActive) }} />}>Lương và vị trí</MenuItem>
                    <MenuItem component={<NavLink to={"/profile/changePassword"} className={isActive => { checkActive(isActive) }} />}>Đổi mật khẩu</MenuItem>
                    <h3 className="sidenav-category">Tổ chức</h3>
                    <MenuItem component={<NavLink to={"/recruit"} className={isActive => { checkActive(isActive) }} />}>Hội đồng tuyển dụng</MenuItem>
                    <MenuItem component={<NavLink to={"/about"} className={isActive => { checkActive(isActive) }} />}>Thông tin chung</MenuItem>

                    {isUserHR ?
                        <>
                            <h3 className="sidenav-category">Quản lý nhân sự</h3>
                            <MenuItem component={<NavLink to={"/hr/auditing"} className={isActive => { checkActive(isActive) }} />}>Lịch sử hoạt động</MenuItem>
                            <MenuItem component={<NavLink to={"/hr/dashboard"} className={isActive => { checkActive(isActive) }} />}>Thống kê chung</MenuItem>
                            <MenuItem component={<NavLink to={"/hr/users"} className={isActive => { checkActive(isActive) }} />}>Danh sách người dùng</MenuItem>
                            <MenuItem component={<NavLink to={"/hr/userDetail"} className={isActive => { checkActive(isActive) }} />}>Chi tiết người dùng</MenuItem>
                        </>
                        : null}
                </Menu>
            </Sidebar>
        </div>
    )
}