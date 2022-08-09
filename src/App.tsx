import React, { useState } from 'react';
import Video1 from './videos/video1';
import Video2 from './videos/video2/video2';
import Video3 from './videos/video3';
import Video4 from './videos/video4/video4';
import Video5 from './videos/video5';
import Video6 from './videos/video6';
import { Button } from '@mui/material';
import Video7 from './videos/video7';

function getVideoById(id: number) {
  switch (id) {
    case 0: return <Video1 />;
    case 1: return <Video2 />;
    case 2: return <Video3 />;
    case 3: return <Video4 />;
    case 4: return <Video5 />;
    case 5: return <Video6 />;
    case 6: return <Video7 />;
    default: return null;
  }
}

function App() {
  const [video, setVideo] = useState(<Video7 />);
  const videos = [
    {id: 0, title: 'React question interview 1'},
    {id: 1, title: 'useMemo & useCallback'},
    {id: 2, title: 'Testing input'},
    {id: 3, title: 'timeout call'},
    {id: 4, title: '?? vs ||'},
    {id: 5, title: 'state variable inside of a function'},
    {id: 6, title: 'dangerously set inner HTML'},
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
