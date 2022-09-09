export interface LinkFormField {
  link: string;
}

export interface LinkFormProps {
  create: (link: string) => void;
}
