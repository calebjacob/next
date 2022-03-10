import type { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/button';
import Flex from '@/components/flex';
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import Section from '@/components/section';
import TextLink from '@/components/text-link';

const HomePage: NextPage = () => {
  return (
    <>
      <Section background="surface1" noBorder>
        <Heading level="1" color="brandPrimary">
          Hello!
        </Heading>

        <Paragraph>
          This is some paragraph text. Here is a{' '}
          <Link href="/other" passHref>
            <TextLink>link</TextLink>
          </Link>{' '}
          to click.
        </Paragraph>

        <Flex breakPoint="tablet">
          <Link href="/other" passHref>
            <Button size="large">Click Me</Button>
          </Link>
          <Button
            appearance="secondary"
            onClick={() => {
              alert('Hello 1');
            }}
          >
            Click Me
          </Button>
          <Button
            appearance="secondary"
            size="small"
            onClick={() => {
              alert('Hello 2');
            }}
          >
            Click Me
          </Button>
        </Flex>
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
