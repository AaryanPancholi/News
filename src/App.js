import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Routes>
        <Route path="/" exact element={<News setProgress={setProgress} pageSize={15} key="home" country={'in'} category={'general'} />} />
        <Route path="/general" exact element={<News setProgress={setProgress} pageSize={15} key="general" country={'in'} category={'general'} />} />
        <Route path="/science" exact element={<News setProgress={setProgress} pageSize={15} key="science" country={'in'} category={'science'} />} />
        <Route path="/technology" exact element={<News setProgress={setProgress} pageSize={15} key="technology" country={'in'} category={'technology'} />} />
        <Route path="/health" exact element={<News setProgress={setProgress} pageSize={15} key="health" country={'in'} category={'health'} />} />
        <Route path="/entertainment" exact element={<News setProgress={setProgress} pageSize={15} key="entertainment" country={'in'} category={'entertainment'} />} />
        <Route path="/sports" exact element={<News setProgress={setProgress} pageSize={15} key="sports" country={'in'} category={'sports'} />} />
        <Route path="/business" exact element={<News setProgress={setProgress} pageSize={15} key="business" country={'in'} category={'business'} />} />
      </Routes>
    </div>
  );
}

export default App;