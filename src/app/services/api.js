import axios from 'axios';

const api = axios.create({
  baseURL: 'http://noformat-git.local/wp-json/wp/v2', // Update to match your WordPress REST API base URL
});

export const fetchBlocksBySlug = async (slug) => {
  try {
    const response = await api.get(`/pages?slug=${slug}&_fields=custom_acf_blocks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ACF blocks by slug:', error);
    throw error;
  }
};
