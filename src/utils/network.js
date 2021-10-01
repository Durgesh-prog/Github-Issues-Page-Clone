import axios, { Method } from 'axios';

const isLogEnabled = process.env.NODE_ENV !== 'production' && process.env.LOGGING == 'true';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    'x-api-key': process.env.API_KEY,
    'Content-Type': 'application/json',
  },
  maxContentLength: 5 * 1000 * 1000, // bytes => 5 MB
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (isLogEnabled)
      console.log('Network Request:', `${config.baseURL}${config.url}`, config.method);
    return config;
  },
  async (error) => {
    if (isLogEnabled) console.error('Network Request:', error);
    throw error;
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (isLogEnabled) console.error('Network Response:', error);
    throw error && error.response && error.response.data;
  },
);

export async function publicRequest(
  request,
) {
  const { data } = await instance.request(request);
  return data;
}

/**
 * @T : Request Body Type
 * @R : Response Body type
 */
export async function protectedRequest(
  request,
  token,
  dispatch,
) {
  try {
    request.headers = { Authorization: `Bearer ${token}` };
    const { data } = await instance.request(request);
    return data;
  } catch (e) {
    if (e.response && e.response.status === '401') dispatch(forceLogout.action());
    throw e;
  }
}
