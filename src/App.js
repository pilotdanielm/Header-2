import React, { useState } from 'react';
import './App.css';
import { FaSignOutAlt } from 'react-icons/fa';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <div>Home Content</div>;
      case 'procedure1':
        return <div>Procedure 1 Content</div>;
      case 'procedure2':
        return <div>Procedure 2 Content</div>;
      case 'progress':
        return <div>Student Progress Content</div>;
      case 'leaderboard':
        return <div>Leaderboard Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      case 'signout':
        return <div>Signed Out</div>;
      default:
        return <div>Home Content</div>;
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProcedures = () => {
    setProceduresOpen(!proceduresOpen);
    setUserOpen(false);  // Close user dropdown if open
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
    setProceduresOpen(false);  // Close procedures dropdown if open
  };

  return (
    <div className="App">
      <header className="navbar">
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <button onClick={() => { setCurrentSection('home'); toggleSidebar(); }}>Home</button>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleProcedures}>Procedures</button>
          {proceduresOpen && (
            <div className="dropdown-content">
              <button onClick={() => { setCurrentSection('procedure1'); toggleSidebar(); }}>Procedure 1</button>
              <button onClick={() => { setCurrentSection('procedure2'); toggleSidebar(); }}>Procedure 2</button>
            </div>
          )}
        </div>
        <button onClick={() => { setCurrentSection('progress'); toggleSidebar(); }}>Progress</button>
        <button onClick={() => { setCurrentSection('leaderboard'); toggleSidebar(); }}>Leaderboard</button>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleUser}>User</button>
          {userOpen && (
            <div className="dropdown-content">
              <button onClick={() => { setCurrentSection('settings'); toggleSidebar(); }}>Settings</button>
              <button onClick={() => { setCurrentSection('profile'); toggleSidebar(); }}>Profile</button>
              <button onClick={() => { setCurrentSection('signout'); toggleSidebar(); }}>
                Sign Out <FaSignOutAlt />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
