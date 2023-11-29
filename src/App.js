import './App.css';
import React from 'react';
import SideNavigation from './components/sideNavigation';
import AuditForHR from './screens/auditForHR';
import { useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
function App() {
  const [isUserHR, setUserHR] = useState(true);
  //function to check user if they belongs to HR department
  const checkUserHR = () => {
    setUserHR(true);
  }
  return (
    <main className="App">
      <SideNavigation isUserHR={isUserHR} />
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
    </main>
  );
}

export default App;
