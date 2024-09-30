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
  return apiRequest.get(`${apiEndPoint.USERS}/${id}?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProvider = (token: any, id: any, skill: string) => {
  return apiRequest.get(
    `${apiEndPoint.USERS}/${id}?populate[skills][filters][name][$eq]=${skill}&populate[skills][populate]=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getProviders = (token: any, queryParams: any) => {
  const url = `${apiEndPoint.USERS}?${new URLSearchParams(
    queryParams,
  ).toString()}`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllProviders = (token: any) => {
  return apiRequest.get(
    `${apiEndPoint.USERS}?filters[roleType]=provider&populate=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
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
// ================= >> Skills << =================
export const getSkillsFromUserId = (userId: number, token: string) => {
  // Construct the URL for fetching the user with populated skills
  const url = `${apiEndPoint.USERS}/${userId}?populate[skills][populate]=category,certifications,job_orders,experiences`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getSkillsFromUserIdDeepFilter = (
  userId: number,
  token: string,
) => {
  // Construct the URL for fetching the user with populated skills
  const url = `${apiEndPoint.USERS}/${userId}?populate[skills][populate]=category,certifications,job_orders,experiences`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

// ================= >>> Job Order <<< =================
export const postJobOrder = (data: {}, token: any) => {
  return apiRequest.post(`${apiEndPoint.JOB_ORDERS}`, data, {
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
    `${apiEndPoint.JOB_ORDERS}?filters[skill][user][name][$eq]=${userName}&populate[user_review]=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getJobOrdersBySkills = (skillIds: number[], token: string) => {
  // Construct the query parameters dynamically based on the skillIds array
  const queryParams = skillIds
    .map((id, index) => `filters[skill][id][$in][${index}]=${id}`)
    .join('&');

  // Construct the URL for fetching job orders
  const url = `${apiEndPoint.JOB_ORDERS}?${queryParams}`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getJobOrders = (
  skillIds: number[],
  token: string,
  jobStatus?: string,
) => {
  // Construct the query parameters dynamically based on the skillIds array
  const skillIdsQuery = skillIds
    .map(id => `filters[skill][id][$in]=${id}`)
    .join('&');

  // Conditionally add the jobStatus filter if provided
  const jobStatusQuery = jobStatus
    ? `&filters[jobStatus][$eq]=${jobStatus}`
    : '';

  // Construct the URL for fetching job orders with skill IDs and optionally job status
  const url = `${apiEndPoint.JOB_ORDERS}?${skillIdsQuery}${jobStatusQuery}&populate[skill][populate][category][populate]=*&populate[service_seeker][populate]=profileImage`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateJobOrder = (
  jobId: number,
  jobStatus: string,
  token: string,
) => {
  // Construct the URL for updating the job order
  const url = `${apiEndPoint.JOB_ORDERS}/${jobId}`;

  // Payload to update the job order status
  const data = {
    data: {
      jobStatus: jobStatus, // Update the jobStatus field with the provided status
    },
  };

  return apiRequest.put(url, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getServiceSeekerBooking = (
  userId: number,
  status: string,
  token: string,
) => {
  // Construct the URL for fetching bookings by user ID and status
  const url = `${apiEndPoint.JOB_ORDERS}?filters[service_seeker][id][$eq]=${userId}&filters[jobStatus][$eq]=${status}&populate[skill][populate][category][populate]=*&populate[service_seeker][populate]=profileImage`;

  return apiRequest.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
