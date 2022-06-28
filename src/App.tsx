import React, { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, } from "react-router-dom";
import Video1 from './videos/video1';
import Video2 from './videos/video2/video2';
import { Button } from '@mui/material';

function getVideoById(id: number) {
  switch (id) {
    case 0: return <Video1 />;
    case 1: return <Video2 />;
    default: return null;
  }
}

function App() {
  const [video, setVideo] = useState(null);
  const videos = [
    {id: 0, title: 'React question interview 1'},
    {id: 1, title: 'useMemo & useCallback'},
  ];

  return (
    <>
      { videos.map((video) => (
        // @ts-ignore
        <Button onClick={() => setVideo(getVideoById(video.id))}>{video.title}</Button>
      ))}
      {video}
    </>
  );
}

export default App;
