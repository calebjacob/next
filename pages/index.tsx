import type { NextPage } from 'next';

import Section from '@/components/section';
import { H1, P } from '@/components/text';

const HomePage: NextPage = () => {
  return (
    <>
      <Section>
        <H1>Hello there!</H1>
        <P>This is some paragraph text.</P>
      </Section>
    </>
  );
};

export default HomePage;
