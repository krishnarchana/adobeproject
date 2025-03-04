import React from 'react';
import './App.css';
import HeaderComponent from './header/HeaderComponent';
import HeaderMenuBarComponent from './headerMenuBar/HeaderMenuBarComponent';
import QuarterlyTable from './content/QuarterlyTable';

function App() {
  return (
      <div style={{ overflow: "hidden" }}>
          <HeaderComponent></HeaderComponent>
          <HeaderMenuBarComponent></HeaderMenuBarComponent>
          <QuarterlyTable></QuarterlyTable>
    </div>
  );
}

export default App;
