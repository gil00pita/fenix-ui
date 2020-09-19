/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";
import Affix from '.';

export default {
  title: "Atoms|Affix",
  decorators: [withKnobs]
};


export const affix  = () => {

  return (
    <React.Fragment>
    <Affix>H</Affix>
  </React.Fragment>
  );
};

