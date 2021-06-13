/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import Affix from './Affix';
import Button from '../../Molecules/Button';

const STORY_CONFIG = {
  title: "Atoms/Affix",
  decorators: [withKnobs]
};

export const AffixComponent: React.FC = () => {
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

export default STORY_CONFIG;
