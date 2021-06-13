/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Badge from './Badge';
import { Notification } from "@fenix-ui/icons/aiFill"

const STORY_CONFIG = {
  title: "Atoms/Badge",
  decorators: [withKnobs]
};

export const BadgeStory = () => {
  return (
    <>
    <div>
    <Badge count={5}>
      <a href="#" className="head-example" >Example</a>
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" >Example</a>
    </Badge>
    <Badge count={<Notification style={{ color: '#f5222d' }} />}>
      <a href="#" className="head-example" >Example</a>
    </Badge>
    <Badge dot>
      <Notification />
    </Badge>
  </div>,
    </>
  )
};

export default STORY_CONFIG;
