import React, { useState, useEffect } from 'react';

import ChannelService from '../services/channel.service';

import './ChannelInfo.css';

function ChannelInfo({ channelId }) {
  const [info, setInfo] = useState({})
  useEffect(() => {
    ChannelService.getChannelInfo(channelId).then(result => {
      setInfo(result)
    });
  }, [channelId]);

  return <div className="channelInfo">
    <img className="thumbnail" alt="" src={info.thumbnail} />
    <div className="title">{info.title}</div>
  </div>
};

export default ChannelInfo;
