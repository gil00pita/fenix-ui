/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import Divider from '.';

export default {
  title: "Atoms/Divider",
  decorators: [withKnobs]
};

export const DividerPlayground = () => {
  return (
    <div>
      < Divider/>
    </div>
  )
};
