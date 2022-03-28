import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
}

const TextInput: FC<Props> = ({ label, name }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <input {...register(name)} />
    </>
  );
};

export default TextInput;
