import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className={`bar bar__header`}>HEADER</div>
        <div className="content"> CONTENT</div>
      <div className={`bar bar__footer`}>FOOTER</div>
    </div>
  );
}

export default App;
