/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";

export default {
  decorators: [withKnobs],
  title: "Atoms/Icons",
};

export const IconsLib = () => {
  return (
    <iframe src="http://localhost:3000" title="Icons Library" width="100%" height="100%" style={{border: 0, height: '100vh'}}></iframe>
  )
};
