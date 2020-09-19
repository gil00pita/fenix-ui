/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

export default {
  title: "Organisms/Message",
  decorators: [withKnobs]
};


export const Message  = () => {

  return (
    <React.Fragment>
      Message
    </React.Fragment>
  );
};

