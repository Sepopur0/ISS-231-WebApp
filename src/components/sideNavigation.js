import { useState } from "react";
import { Sidebar ,Menu,MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './common.css'

//icons
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import HistoryIcon from '@mui/icons-material/History';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ListIcon from '@mui/icons-material/List';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
// export default function SideNavigation({ isUserHR }) {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const [collapsed, setCollapsed] = useState(false);
//     const [focus, setFocus] = useState(null);
//     const checkActive = (isActive) => {
//         return isActive == focus ? "activeSidenav" : "sidenav";
//     }
//     return (
//         <div className="side-nav">
//             <Sidebar onBackdropClick={() => { setCollapsed(true); }} collapsed={collapsed} style={{ backgroundColor: 'white' }}>
//                 <h3 className="sidenav-category">Employee Center</h3>
//                 <Menu>
//                     <h4 className="sidenav-category">Cá nhân</h4>
//                     <MenuItem icon={<PersonIcon />} component={<NavLink to={"/profile"} className={checkActive(1)} onClick={() => { setFocus(1); }} />}>Thông tin cá nhân</MenuItem>
//                     <MenuItem icon={<AttachMoneyIcon />} component={<NavLink to={"/workHistory"} className={checkActive(2)} onClick={() => { setFocus(2); }} />}>Lương và vị trí</MenuItem>
//                     <MenuItem icon={<KeyIcon />} component={<NavLink to={"/profile/changePassword"} className={checkActive(3)} onClick={() => { setFocus(3); }} />}>Đổi mật khẩu</MenuItem>

//                     <h4 className="sidenav-category">Tổ chức</h4>
//                     <MenuItem icon={<GroupIcon />} component={<NavLink to={"/recruit"} className={checkActive(4)} onClick={() => { setFocus(4); }} />}>Hội đồng tuyển dụng</MenuItem>
//                     <MenuItem icon={<InfoIcon />} component={<NavLink to={"/about"} className={checkActive(5)} onClick={() => { setFocus(5); }} />}>Thông tin chung</MenuItem>

//                     {isUserHR ?
//                         <>
//                             <h4 className="sidenav-category">Quản lý nhân sự</h4>
//                             <MenuItem icon={<HistoryIcon />} component={<NavLink to={"/hr/auditing"} className={checkActive(6)} onClick={() => { setFocus(6); }} />}>Lịch sử hoạt động</MenuItem>
//                             <MenuItem icon={<EqualizerIcon />} component={<NavLink to={"/hr/dashboard"} className={checkActive(7)} onClick={() => { setFocus(7); }} />}>Thống kê chung</MenuItem>
//                             <MenuItem icon={<ListIcon />} component={<NavLink to={"/hr/users"} className={checkActive(8)} onClick={() => { setFocus(8); }} />}>Danh sách người dùng</MenuItem>
//                             <MenuItem icon={<PersonSearchIcon />} component={<NavLink to={"/hr/userDetail"} className={checkActive(9)} onClick={() => { setFocus(9); }} />}>Chi tiết người dùng</MenuItem>
//                         </>
//                         : null}
//                 </Menu>
//             </Sidebar>
//         </div>
//     )
// }

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected===title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const SideNavigation = (isUserHR) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Thông tin cá nhân");

    return (
        <Box
            sx={{
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-menuitem-root": {
                    padding: "5px 30px 5px 15px !important",
                    borderRadius:'8px'
                },
                "& .ps-menu-button:hover": {
                    backgroundColor: "#868dfb !important",
                    borderRadius:'8px'
                },
                "& .ps-menu-button.ps-active": {
                    backgroundColor:'#54cf93 !important',
                    borderRadius:'8px'
                },
            }}
        >
            <Sidebar collapsed={isCollapsed} width="280px">
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h4" color={colors.grey[100]}>
                                    Employee center
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Tùng
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    HR Manager
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Cá nhân
                    </Typography>
                    <Item
                        title="Thông tin cá nhân"
                        to="/profile"
                        icon={<PersonIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Lương và vị trí"
                        to="/workHistory"
                        icon={<AttachMoneyIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Đổi mật khẩu"
                        to="/profile/changePassword"
                        icon={<KeyIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Tổ chức
                    </Typography>
                    <Item
                        title="Hội đồng tuyển dụng"
                        to="/recruit"
                        icon={<GroupIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Thông tin chung"
                        to="/about"
                        icon={<InfoIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    {isUserHR ? <>
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Quản lý nhân sự
                        </Typography>
                        <Item
                            title="Lịch sử hoạt động"
                            to="/hr/auditing"
                            icon={<HistoryIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Thống kê chung"
                            to="/hr/dashboard"
                            icon={<EqualizerIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Danh sách người dùng"
                            to="/hr/users"
                            icon={<ListIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </> :
                        null}
            </Menu>
        </Sidebar>
    </Box >
  );
};

export default SideNavigation



