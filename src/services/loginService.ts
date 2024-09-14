import {request} from 'utils';

const baseURL = '/login';

export const reqUserLogin = (payload: any) => {
  return request.post(`${baseURL}/userLogin`, payload);
};

export const reqTouristLogin = (payload: any) => {
  return request.post(`${baseURL}/touristLogin`, payload);
};
