import { URL } from '../../constants/urls';
import api from '../api';

export function getStatistics(order: string, offset: number, limit: number) {
  const response = api.get(URL.STAT, { params: { order, offset, limit } });
  return response;
}
