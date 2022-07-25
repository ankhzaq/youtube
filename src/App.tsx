import React, { useState } from 'react';
import Video1 from './videos/video1';
import Video2 from './videos/video2/video2';
import Video3 from './videos/video3';
import Video4 from './videos/video4/video4';
import { Button } from '@mui/material';

function getVideoById(id: number) {
  switch (id) {
    case 0: return <Video1 />;
    case 1: return <Video2 />;
    case 2: return <Video3 />;
    case 3: return <Video4 />;
    default: return null;
  }
}

function App() {
  const [video, setVideo] = useState(<Video4 />);
  const videos = [
    {id: 0, title: 'React question interview 1'},
    {id: 1, title: 'useMemo & useCallback'},
    {id: 2, title: 'Testing input'},
    {id: 3, title: 'timeout call'},
  ];

  return (
    <>
      { videos.map((video) => (
        // @ts-ignore
        <Button key={video.id} onClick={() => setVideo(getVideoById(video.id))}>{video.title}</Button>
      ))}
      {video}
    </>
  );
}

export default App;
