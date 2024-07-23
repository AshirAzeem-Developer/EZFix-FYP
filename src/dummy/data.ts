import {Role} from '../constants/enums/applicationRoleEnums';

export const users = {
  provider: {
    id: 1,
    role: {
      id: Role.ServiceProvider,
      name: 'Provider',
    },
    name: 'Ashir',
  },
  seeker: {
    id: 2,
    role: {
      id: Role.ServiceSeeker,
      name: 'Seeker',
    },
    name: 'Ashir',
  },
};
