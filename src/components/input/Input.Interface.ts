export interface InputProps {
  id: string;
  type: string;
  defaultValue: string;
  placeholder?: string;
  register: FormInputProps;
}

type FormInputProps = {
  name: string;
};
