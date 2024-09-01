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

export const getUserById = (token: any, id: any) => {
  return apiRequest.get(`${apiEndPoint.GET_USER_BY_ID}/${id}?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProvider = (token: any, id: any, skill: string) => {
  return apiRequest.get(
    `${apiEndPoint.GET_PROVIDER}/${id}?populate[skills][filters][name][$eq]=${skill}&populate[skills][populate]=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getProviders = (token: any, queryParams: any) => {
  const url = `${apiEndPoint.GET_PROVIDERS}?${new URLSearchParams(
    queryParams,
  ).toString()}`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

export const getJobOrdersByUserNameWithReviews = (
  token: any,
  userName: string,
) => {
  return apiRequest.get(
    `${apiEndPoint.CREATE_JOB}?filters[skill][user][name][$eq]=${userName}&populate[user_review]=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
