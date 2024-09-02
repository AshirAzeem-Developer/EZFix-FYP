// const _Environments = {
//   development: {
//     API_URL: `https://xxx.xxx.xxx.com/api`,
//     LOGIN: `/xxx/xxx`,

import {REGISTER} from 'redux-persist';

//   },
// };

// function getEnvironment() {
//   const platform = 'development';
//   return _Environments[platform];
// }

// const Environment = getEnvironment();
// export default Environment;
// office Address: 192.168.100.45
// second Address : 192.168.0.102
export default {
  BASE_URL: `https://dev-api.ezfix.bond`,
  API_URL: `https://dev-api.ezfix.bond/api`,
  LOGIN: `/auth/local`,
  REGISTER: `/auth/local/register`,
  CATEGORY: `/categories`,
  SUPPORT: `/supports`,
  CREATE_JOB: `/job-orders`,
  GET_PROVIDERS: `/users`,
  GET_PROVIDER: `/users`,
  GET_USER_BY_ID: `/users`,
};
