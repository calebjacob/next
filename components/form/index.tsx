import type { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  onSubmit(data: unknown): void;
}

const Form: FC<Props> = ({ children, onSubmit }: Props) => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
