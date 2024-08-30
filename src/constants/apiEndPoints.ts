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
  BASE_URL: `http://192.168.0.105:1339`,
  API_URL: `http://192.168.220.110:1339/api`,
  LOGIN: `/auth/local`,
  REGISTER: `/auth/local/register`,
  CATEGORY: `/categories`,
  SUPPORT: `/supports`,
};
