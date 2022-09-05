export interface ControlsProps {
  onReg: () => void;
  onAuth: () => void;
  logout: () => void;
  token: string;
}
