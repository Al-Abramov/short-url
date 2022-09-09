import { URL } from '../../constants/urls';
import api from '../api';

export function createShortLink(link: string) {
  const response = api.post(URL.SHORT, null, { params: { link } });
  return response;
}
