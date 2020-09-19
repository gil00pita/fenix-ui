/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

export default {
  title: "Molecules/EmptySpaces",
  decorators: [withKnobs]
};

export const EmptySpaces  = () => {

  return (
    <React.Fragment>
      EmptySpaces
    </React.Fragment>
  );
};

