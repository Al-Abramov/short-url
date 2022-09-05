import { UserData } from '../../../store/user-slice/user-reducer.interface';

export interface AuthProps {
  onAuth: (data: UserData) => void;
  error: string;
}
