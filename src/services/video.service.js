import axios from 'axios';
import queryString from 'query-string';
import { API_URL, API_KEY } from '../common/constants.js';

const VIDEO_API_URL = `${API_URL}videos`;

const getVideoInfo = async (videoId) => {
  const searchParams = queryString.stringify({
    id: videoId,
    key: API_KEY,
    maxResults: 1,
    part: 'statistics',
    fields: 'items(statistics(viewCount))'
  })
  try {
    const res = await axios.get(`${VIDEO_API_URL}?${searchParams}`);
    const items = (res.data.items || []).map(i => ({
      viewCount: i.statistics.viewCount,
    }));

    return items[0];
  } catch (error) {
    return;
  }
};

const exportedObject = {
  getVideoInfo,
};

export default exportedObject;
