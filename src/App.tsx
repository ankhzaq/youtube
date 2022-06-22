import React from 'react';
import { BrowserRouter, Navigate, Routes, Route, } from "react-router-dom";
import Video1 from './videos/video1';
import Video2 from './videos/video2/video2';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/video1" element={<Video1 />} />
          <Route path="/video2" element={<Video2 />} />
          <Route path="*" element={<Navigate replace to="/video1" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
