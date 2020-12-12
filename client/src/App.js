import React from 'react';
import './App.css';
import Navbar from './features/navbar/Navbar.component.jsx'
import CourseAllocationTable from './features/CourseAllocation/CourseAllocationTable';
import Footer from './features/footer/Footer.component';

function App() {
  return (
  <>
      <Navbar/>
    <div className="container">
        <CourseAllocationTable />
    </div>

    <Footer/>
  </>
  );
}

export default App;
