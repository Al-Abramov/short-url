import { URL } from '../../constants/urls';
import api from '../api';

export function getStatistics() {
  const response = api.get(URL.STAT, { params: { order: 'asc_short', offset: 0, limit: 0 } });
  return response;
}

//order: string, offset: number, limit: number
