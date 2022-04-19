import React from 'react';

import Statistics from './Statistics';
import ChannelInfo from './ChannelInfo';
import './VideoCard.css';

function VideoCard({ info }) {
  return <div className="card">
    <img alt="" src={info.thumbnail} />
    <div className="detail">
      <div className="title">{info.title}</div>
      <div className="count"><Statistics videoId={info.videoId}/></div>
      <div className="channel"><ChannelInfo channelId={info.channelId} /></div>
      <div className="description">{info.description}</div>
    </div>
  </div>
};

export default VideoCard;
