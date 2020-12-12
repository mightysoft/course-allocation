import React from 'react';
import './App.css';
import Navbar from './features/navbar/Navbar.component.jsx'
import CourseAllocationTable from './features/CourseAllocation/CourseAllocationTable';

function App() {
  return (
  <>
      <Navbar/>
    <div className="container">
        <CourseAllocationTable />
    </div>
  </>
  );
}

export default App;
