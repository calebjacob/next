import type { NextPage } from 'next';

import Button from '@/components/button';
import Form from '@/components/form';
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import Section from '@/components/section';
import TextInput from '@/components/text-input';

const OtherPage: NextPage = () => {
  function onSubmit(data: unknown) {
    console.log(data);
  }

  return (
    <>
      <Section background="surface1" noBorder>
        <Heading level="1" color="brandPrimary">
          Other Page
        </Heading>

        <Paragraph>This is some paragraph text.</Paragraph>
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
