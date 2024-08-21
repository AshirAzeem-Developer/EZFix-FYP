// const _Environments = {
//   development: {
//     BASE_URL: `https://xxx.xxx.xxx.com/api`,
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

export default {
  BASE_URL: `http://localhost:1339/api`,
  LOGIN: `/auth/local`,
  REGISTER: `/auth/register`,
};
