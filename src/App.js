import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from '@mui/material';

import SideNavigation from './components/sideNavigation';
import ProfileBar from './components/profileBar';
import AuditForHR from './screens/auditForHR';
import HRDashboard from './screens/dashboardAboutUserForHR';
import ProfilePage from './screens/profilePage';
import SalaryPosition from './screens/salaryPosition';
import UserManageHR from './screens/userManageForHR';
function App() {
  const [isUserHR, setUserHR] = useState(true);
  const [theme, colorMode] = useMode();
  //function to check user if they belongs to HR department
  const checkUserHR = () => {
    setUserHR(true);
  }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="App">
          <SideNavigation isUserHR={isUserHR} />
          <div>
            <ProfileBar />
            <div style={{ paddingLeft: 10 }}>
              <Routes>
                <Route path='/profile' Component={ProfilePage}/>
                <Route path='/workHistory' Component={SalaryPosition}/>
                <Route path='/profile/changePassword' />
                <Route path='/recruit' />
                <Route path='/about' /> */
                {isUserHR ?
                  <>
                    <Route path='/hr/auditing' Component={AuditForHR} />
                    <Route path='/hr/dashboard' Component={HRDashboard} />
                    <Route path='/hr/users' Component={UserManageHR}/>
                    <Route path='/hr/userDetail' />
                  </>
                  : null}
              </Routes>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
