/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import Checkbox from './Checkbox';

export default {
  title: "Atoms/Controls/Checkbox",
  decorators: [withKnobs]
};

export const CheckboxPlayground = () => {
  return (
    <div>
Checkbox
    </div>
  )
};
