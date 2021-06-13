/* eslint-disable jsx-a11y/anchor-is-valid */
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";
import React, { useState } from 'react';
import Affix from './Affix';
import Button from '../../Molecules/Button';

export default {
  title: "Atoms/Affix",
  decorators: [withKnobs]
};


export const AffixDemo: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

