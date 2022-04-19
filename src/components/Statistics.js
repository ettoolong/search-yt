import React, { useState, useEffect } from 'react';

import VideoService from '../services/video.service';

function Statistics({ videoId }) {
  const [info, setInfo] = useState({})
  useEffect(() => {
    VideoService.getVideoInfo(videoId).then(result => {
      setInfo(result)
    });
  }, [videoId]);

  return <div>{`觀看次數：${info.viewCount}`}</div>
};

export default Statistics;
