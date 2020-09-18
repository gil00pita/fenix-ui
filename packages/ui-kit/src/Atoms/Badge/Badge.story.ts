/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import Badge from '.';

export default {
  title: "Atoms/Badge",
  decorators: [withKnobs]
};

export const BadgeAvatar = () => {
  const groupId = 'Badge Settings';

  return (
    <Badge />
  )
};
