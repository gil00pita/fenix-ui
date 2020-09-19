/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Skeleton",
  decorators: [withKnobs]
};

export const Skeleton  = () => {

  return (
    <React.Fragment>
      Skeleton
    </React.Fragment>
  );
};

