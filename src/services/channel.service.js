import axios from 'axios';
import queryString from 'query-string';
import { API_URL, API_KEY } from '../common/constants.js';

const CHANNEL_API_URL = `${API_URL}channels`;

const getChannelInfo = async (channelId) => {
  const searchParams = queryString.stringify({
    id: channelId,
    key: API_KEY,
    maxResults: 1,
    part: 'snippet',
    fields: 'items(snippet(title,thumbnails(default(url))))'
  })
  try {
    const res = await axios.get(`${CHANNEL_API_URL}?${searchParams}`);
    const items = (res.data.items || []).map(i => ({
      title: i.snippet.title,
      thumbnail: i.snippet.thumbnails.default.url,
    }));

    return items[0];
  } catch (error) {
    return;
  }
};

const exportedObject = {
  getChannelInfo,
};

export default exportedObject;
