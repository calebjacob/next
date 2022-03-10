import type { NextPage } from 'next';

import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import Section from '@/components/section';

const OtherPage: NextPage = () => {
  return (
    <>
      <Section background="surface1" noBorder>
        <Heading level="1" color="brandPrimary">
          Other Page
        </Heading>

        <Paragraph>This is some paragraph text.</Paragraph>
      </Section>
    </>
  );
};

export default OtherPage;
