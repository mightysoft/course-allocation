import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CourseAllocationTable from './features/CourseAllocation/CourseAllocationTable';

function App() {
  return (
    <div className="App">
        <CourseAllocationTable />
       
    </div>
  );
}

export default App;
