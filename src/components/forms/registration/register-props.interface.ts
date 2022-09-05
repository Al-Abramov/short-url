import { UserData } from '../../../store/user-slice/user-reducer.interface';

export interface RegisterProps {
  onRegister: (data: UserData) => void;
  error: string;
}
