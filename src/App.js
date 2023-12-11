import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideNavigation from './components/sideNavigation';
import AuditForHR from './screens/auditForHR';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileBar from './components/profileBar';
function App() {
  const [isUserHR, setUserHR] = useState(true);
  //function to check user if they belongs to HR department
  const checkUserHR = () => {
    setUserHR(true);
  }
  return (
    <main className="App">
      <SideNavigation isUserHR={isUserHR} />
      <div>
        <ProfileBar />
        <div style={{paddingLeft:10}}>
        <Routes>
          <Route path='/profile' />
          <Route path='/workHistory' />
          <Route path='/profile/changePassword' />
          <Route path='/recruit' />
          <Route path='/about' /> */
          {isUserHR ?
            <>
              <Route path='/hr/auditing' Component={AuditForHR} />
              <Route path='/hr/dashboard' />
              <Route path='/hr/users' />
              <Route path='/hr/userDetail' />
            </>
            : null}
        </Routes>
        </div>
      </div>

    </main>
  );
}

export default App;
