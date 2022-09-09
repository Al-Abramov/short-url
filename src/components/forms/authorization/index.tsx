import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Field } from '../../field';
import { Input } from '../../input';
import { RegFormField } from '../reg-form.interface';
import { AuthProps } from './auth-props.interface';
import './style.scss';

export const AuthorizationForm: React.FC<AuthProps> = (props) => {
  const { register, handleSubmit, reset } = useForm<RegFormField>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<RegFormField> = (data) => {
    props.onAuth(data);
    reset();
  };

  return (
    <form className="Form" action="" onSubmit={handleSubmit(onSubmit)}>
      <h2>Authorization</h2>
      <Field label="Name" htmlFor="name">
        <Input
          id="name"
          type="text"
          defaultValue=""
          register={register('name', { required: true })}
        />
      </Field>
      <Field label="Password" htmlFor="password" error={props.error}>
        <Input
          id="password"
          type="password"
          defaultValue=""
          register={register('password', { required: true })}
        />
      </Field>
      <button>Log in</button>
    </form>
  );
};
