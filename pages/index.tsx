import type { NextPage } from 'next';

import Button from '@/components/button';
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import Section from '@/components/section';

const HomePage: NextPage = () => {
  return (
    <>
      <Section background="surface1" noBorder>
        <Heading level="1" color="brandPrimary">
          Hello!
        </Heading>
        <Paragraph>This is some paragraph text.</Paragraph>
        <Button size="large">Click Me</Button>
        <Button appearance="secondary">Click Me</Button>
        <Button appearance="secondary" size="small">
          Click Me
        </Button>
      </Section>

      <Section>
        <Heading level="2">Another Section</Heading>
        <Paragraph>This is some other paragraph text.</Paragraph>
      </Section>

      <Section>
        <Heading level="3">Another Section</Heading>
        <Paragraph>This is some other paragraph text.</Paragraph>
      </Section>
    </>
  );
};

export default HomePage;
