import { API_DOMAIN } from './constans';

export const generalOptions = () => ({
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const Fetcher = (method) => async (url, options) => {
  const body = await fetch(`${API_DOMAIN}${url}`, {
    method,
    ...generalOptions(),
    ...options,
  });
  const serverData = await body.json();
  return serverData;
};

export const Fetch = {
  get: Fetcher('GET'),
  post: Fetcher('POST'),
  delete: Fetcher('DELETE'),
  put: Fetcher('PUT'),
};
