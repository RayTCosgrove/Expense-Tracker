import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Topbar from './components/Topbar';



function App() {
  return (
    <div className="wrapper">
      <Topbar/>
     
      <Sidebar />
      <Content />
    </div>
  );
}



export default App;

