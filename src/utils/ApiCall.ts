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

export const getMultipleUsers = (token: string, userIds: number[]) => {
  // Handle empty array case
  if (!userIds.length) {
    return Promise.resolve({data: []});
  }

  // Build the filter query for multiple IDs
  const filterQuery = userIds
    .map((id, index) => `filters[id][$in][${index}]=${id}`)
    .join('&');

  // Construct the complete URL with filters and populate
  const url = `${apiEndPoint.USERS}?${filterQuery}&populate=*`;

  return apiRequest
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log(
        'Multiple Users Response:',
        JSON.stringify(response.data, null, 2),
      );
      return response;
    })
    .catch(error => {
      console.error('Error fetching multiple users:', error);
      throw error;
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
    `${apiEndPoint.USERS}?filters[roleType]=provider&populate[profileImage]=*&populate[skills]=*&populate[job_orders][populate]=*`,
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

export const getUserByNameWithAllDetails = (token: any, userName: string) => {
  return apiRequest.get(
    `${apiEndPoint.USERS}?filters[name][$eq]=${userName}&populate=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
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
    `${apiEndPoint.JOB_ORDERS}?filters[skill][user][name][$eq]=${userName}&populate[user_review][populate][user][populate]=*`,
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

// ================================ >> Message << ================================
export const fetchFriendsList = (userId: number, token: string) => {
  // Query messages to find all chats involving the user
  const url = `${apiEndPoint.MESSAGES}?filters[$or][0][sender][id][$eq]=${userId}&filters[$or][1][recipient][id][$eq]=${userId}&populate=sender,recipient`;

  return apiRequest
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log('Response Data', JSON.stringify(response.data, null, 2));
      // Extract recipients from the response data
      const friendsList = response.data?.data?.map((message: any) => {
        // Return the recipient if the current user is the sender, or the sender if the current user is the recipient
        return message?.attributes?.sender?.data?.id === userId
          ? message.attributes?.recipient
          : message.attributes?.sender;
      });

      console.log('Friends List', JSON.stringify(friendsList, null, 2));

      // Keep only the first occurrence of each user based on their id (discard subsequent duplicates)
      const seenUserIds = new Set();
      const filteredFriendsList = friendsList.filter((friend: any) => {
        // Make sure to access the id at the correct level (friend.data.id)
        const friendId = friend?.data?.id;

        // If the user's id has already been seen, discard this friend
        if (seenUserIds.has(friendId)) {
          return false; // Discard the duplicate
        }
        seenUserIds.add(friendId); // Add the user's id to the seen set
        return true; // Keep the first occurrence
      });

      // console.log(
      //   'Filtered Friends List',
      //   JSON.stringify(filteredFriendsList, null, 2),
      // );

      return filteredFriendsList;
    })
    .catch(error => {
      console.error('Error fetching friends list:', error);
      throw error;
    });
};

// /api/users
// ========================= >> SKILLS << =========================

export const getSkillsByCategoryWithUserDetails = (
  token: string,
  categoryName: string,
) => {
  return apiRequest.get(
    `${apiEndPoint.SKILLS}?filters[category][name][$eq]=${categoryName}&&populate=category,user,job_orders,user.profileImage`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
export const postSkill = (data: {}, token: any) => {
  return apiRequest.post(`/api/skills`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

// =========================>> Notifications << =========================

export const getNotificationsByUserId = (token: string, userId: number) => {
  return apiRequest.get(
    `${apiEndPoint.NOTIFICATIONS}?filters[sendTo][id][$eq]=${userId}&populate=*`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
// ========================= >> Location << =========================
export const createLocation = (token: string, data: any) => {
  return apiRequest.post(`${apiEndPoint.LOCATIONS}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

// ========================= >> HUZAIFA API CALLINGS << =========================
export const updateUserById = (token: string, userId: string, data: any) => {
  return apiRequest.put(`${apiEndPoint.USERS}/${userId}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
