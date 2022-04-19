import axios from 'axios';
import queryString from 'query-string';
import { API_URL, API_KEY } from '../common/constants.js';

const SEARCH_API_URL = `${API_URL}search`;

const getSearchResult = async (searchTerm) => {
  const searchParams = queryString.stringify({
    q: searchTerm,
    key: API_KEY,
    type: 'video',
    maxResults: 4,
    part: 'snippet',
    fields: 'items(id(videoId),snippet(channelId,title,description,thumbnails(medium(url)),channelTitle))'
  })
  try {
    const res = await axios.get(`${SEARCH_API_URL}?${searchParams}`);
    const items = (res.data.items || []).map(i => ({
      videoId: i.id.videoId,
      channelId: i.snippet.channelId,
      channelTitle: i.snippet.channelTitle,
      description: i.snippet.description,
      thumbnail: i.snippet.thumbnails.medium.url,
      title: i.snippet.title,
    }));

    return items;
  } catch (error) {
    return;
  }
};

const exportedObject = {
  getSearchResult,
};

export default exportedObject;
