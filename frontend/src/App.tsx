import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Player from './containers/Player/Player'
import Homepage from './containers/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="room" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
