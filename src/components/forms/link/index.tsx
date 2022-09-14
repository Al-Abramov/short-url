import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Field } from '../../field';
import { Input } from '../../input';
import { LinkFormField, LinkFormProps } from './link-form.interface';
import './style.scss';

const CreateLinkForm: React.FC<LinkFormProps> = (props) => {
  const { register, handleSubmit, reset } = useForm<LinkFormField>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<LinkFormField> = (data) => {
    props.create(data.link);
    reset();
  };

  return (
    <form className="CreateLinkForm" action="" onSubmit={handleSubmit(onSubmit)}>
      <h2>Create short link</h2>
      <Field label="Link" htmlFor="link">
        <Input
          id="link"
          type="text"
          defaultValue=""
          register={register('link', { required: true })}
        />
      </Field>
      <button>Create</button>
    </form>
  );
};

export default React.memo(CreateLinkForm);
