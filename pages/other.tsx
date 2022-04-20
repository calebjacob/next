import type { NextPage } from 'next';

import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { H1 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';
import { TextInput } from '@/components/text-input';

const OtherPage: NextPage = () => {
  function onSubmit(data: unknown) {
    console.log(data);
  }

  return (
    <>
      <Section color="primary" noBorder>
        <H1>Other Page</H1>
        <P>This is some paragraph text.</P>
      </Section>

      <Section>
        <Form onSubmit={onSubmit}>
          <TextInput label="First Name" name="firstName" />
          <TextInput label="Last Name" name="lastName" />

          <Button type="submit">Submit</Button>
        </Form>
      </Section>
    </>
  );
};

export default OtherPage;
