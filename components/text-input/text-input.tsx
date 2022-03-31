import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
}

export const TextInput = ({ label, name }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <input {...register(name)} />
    </>
  );
};
