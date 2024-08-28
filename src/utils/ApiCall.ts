import apiRequest from './api';
import apiEndPoint from '../constants/apiEndPoints';

export const getCategories = (token: any) => {
  return apiRequest.get(`${apiEndPoint.CATEGORY}/?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
export const postSupport = (data: {}, token: any) => {
  return apiRequest.post(`${apiEndPoint.SUPPORT}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
