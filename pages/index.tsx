import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Flex } from '@/components/flex';
import { H1, H2, H3 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';
import { TextLink } from '@/components/text-link';

const HomePage: NextPage = () => {
  return (
    <>
      <Section color="primary" noBorder>
        <H1 color="brandPrimary">Hello!</H1>

        <P>
          This is some paragraph text. Here is a{' '}
          <Link href="/other" passHref>
            <TextLink>link</TextLink>
          </Link>{' '}
          to click.
        </P>

        <Flex stack="mobile">
          <Link href="/other" passHref>
            <Button size="large">Click Me</Button>
          </Link>
          <Button
            color="secondary"
            onClick={() => {
              alert('Hello 1');
            }}
          >
            Click Me
          </Button>
          <Button
            color="secondary"
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
        <H2>Another Section</H2>
        <P>This is some other paragraph text.</P>
      </Section>

      <Section>
        <H3>Another Section</H3>
        <P>This is some other paragraph text.</P>
      </Section>
    </>
  );
};

export default HomePage;
