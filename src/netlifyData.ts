import { NetlifyDataResponse } from './types/NetlifyDataResponse';

export const netlifyData = (data: any, status: number = 200): NetlifyDataResponse => ({
  statusCode: status,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
});
