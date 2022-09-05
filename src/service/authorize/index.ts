import { URL } from '../../constants/urls';
import api from '../api';

export async function registration(name: string, password: string) {
  const response = await api.post(URL.REG, null, { params: { username: name, password } });
  return response;
}

export async function authorize(name: string, password: string) {
  const formData = new FormData();
  formData.append('username', name);
  formData.append('password', password);

  const url = `${URL.AUTH}`;
  const response = await api.post(url, formData);
  return response;
}
