import apiRequest from './api';
import apiEndPoint from '../constants/apiEndPoints';

// ================= >>> Auth <<< =================
export const postLogin = (data: {}) => {
  return apiRequest.post(`${apiEndPoint.LOGIN}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

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

// ================= >>> Job Order <<< =================
export const postJobOrder = (data: {}, token: any) => {
  return apiRequest.post(`${apiEndPoint.CREATE_JOB}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
