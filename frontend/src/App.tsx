import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Player from './containers/Player/Player'

function App() {
  return (
    <div className="App">
      <Player />
    </div>
  );
}

export default App;
