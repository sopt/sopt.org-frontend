import axios from 'axios';

const BASE_URL = 'http://3.39.111.29:3000';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export const getMainLogo = async () => {
  const data = await client.get('/logo');

  return data?.data;
};