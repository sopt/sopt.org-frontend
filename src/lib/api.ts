import axios from 'axios';

const BASE_URL = 'https://api.sopt.org';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export const getMainLogo = async () => {
  const data = await client.get('/logo');

  return data?.data;
};

export const getPartnersData = async () => {
  const data = await client.get('/history/partners');

  return data?.data;
};
