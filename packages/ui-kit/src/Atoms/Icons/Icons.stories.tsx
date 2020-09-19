/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Icons",
  decorators: [withKnobs]
};

export const IconsLib = () => {
  return (
    <iframe src="http://localhost:3000" title="W3Schools Free Online Web Tutorials" width="100%" height="100%" style={{border: 0}}></iframe>
  )
};
