/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import AvatarGroup from './Group';
import Avatar from './Avatar';
import { AbTesting } from '@fenix-ui/icons/mdc';

export default {
  title: "Atoms/Avatar/Group",
  decorators: [withKnobs]
};


export const ImageAvatarGroup  = () => {
  const groupId = 'Avatar settings';

  const shapeLabel = 'Shape?';
  const shapeDefaultValue = 'circle';
  const shapeOptions = {
    Square: 'square',
    Circle: 'circle'
  };

  const strokeLabel = 'Stroke Width';
  const strokeDefaultValue = 2;
  const strokeOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const radiusLabel = 'Border Radius';
  const radiusDefaultValue = 0;
  const radiusOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const blurLabel = 'Blur Amount';
  const blurDefaultValue = 0;
  const blurOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const sizeLabel = 'Size Width & Height';
  const sizeDefaultValue = 64;
  const sizeOptions = {
    range: true,
    min: 0,
    max: 9999,
    step: 1,
  };

  const borderColorLabel = 'Border Color';
  const borderColorDefaultValue = '#fff';

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#cbcb';

  const strokeValue = number(strokeLabel, strokeDefaultValue, strokeOptions, groupId);
  const radiusValue = number(radiusLabel, radiusDefaultValue, radiusOptions, groupId);
  const blurValue = number(blurLabel, blurDefaultValue, blurOptions, groupId);
  const sizeValue = number(sizeLabel, sizeDefaultValue, sizeOptions, groupId);
  const shapeValue = select(shapeLabel, shapeOptions, shapeDefaultValue, groupId);
  const borderColorValue = color(borderColorLabel, borderColorDefaultValue, groupId);
  const bgColorValue = color(bgColorLabel, bgDefaultValue, groupId);

  return (
    <React.Fragment>
    <AvatarGroup>
    <Avatar
      alt="Avatar"
      src="https://i.pinimg.com/originals/9a/89/02/9a8902b59973088909eb6fa34bb0659b.png"
      blur={blurValue}
      size={sizeValue}
      shape={shapeValue}
      bgColor={bgColorValue}
      borderColor={borderColorValue}
      borderWidth={strokeValue}
      borderRadius={radiusValue}
    />
    <Avatar
      alt="Avatar"
      src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg"
      blur={blurValue}
      size={sizeValue}
      shape={shapeValue}
      bgColor={bgColorValue}
      borderColor={borderColorValue}
      borderWidth={strokeValue}
      borderRadius={radiusValue}
    />
    <Avatar
      alt="Avatar"
      src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg"
      blur={blurValue}
      size={sizeValue}
      shape={shapeValue}
      bgColor={bgColorValue}
      borderColor={borderColorValue}
      borderWidth={strokeValue}
      borderRadius={radiusValue}
    />
    </AvatarGroup>
  </React.Fragment>
  );
};

export const IconAvatarGroup = () => {
  const groupId = 'Avatar settings';

  const shapeLabel = 'Shape?';
  const shapeDefaultValue = 'circle';
  const shapeOptions = {
    Square: 'square',
    Circle: 'circle'
  };

  const strokeLabel = 'Stroke Width';
  const strokeDefaultValue = 2;
  const strokeOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const radiusLabel = 'Border Radius';
  const radiusDefaultValue = 2;
  const radiusOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const blurLabel = 'Blur Amount';
  const blurDefaultValue = 2;
  const blurOptions = {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  };

  const sizeLabel = 'Size Width & Height';
  const sizeDefaultValue = 64;
  const sizeOptions = {
    range: true,
    min: 0,
    max: 9999,
    step: 1,
  };

  const borderColorLabel = 'Border Color';
  const borderColorDefaultValue = '#fff';

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#ff00ff';

  const srcLabel = 'Image Src';
  const srcDefaultValue = '';

  const strokeValue = number(strokeLabel, strokeDefaultValue, strokeOptions, groupId);
  const radiusValue = number(radiusLabel, radiusDefaultValue, radiusOptions, groupId);
  const blurValue = number(blurLabel, blurDefaultValue, blurOptions, groupId);
  const sizeValue = number(sizeLabel, sizeDefaultValue, sizeOptions, groupId);
  const shapeValue = select(shapeLabel, shapeOptions, shapeDefaultValue, groupId);
  const borderColorValue = color(borderColorLabel, borderColorDefaultValue, groupId);
  const bgColorValue = color(bgColorLabel, bgDefaultValue, groupId);
  const srcValue = text(srcLabel, srcDefaultValue, groupId);

  return (
    <AvatarGroup>
      <Avatar
        alt="Avatar"
        src={srcValue}
        blur={blurValue}
        size={sizeValue}
        icon={<AbTesting />}
        shape={shapeValue}
        bgColor={bgColorValue}
        borderColor={borderColorValue}
        borderWidth={strokeValue}
        borderRadius={radiusValue}
      />
      <Avatar
      alt="Avatar"
        src={srcValue}
        blur={blurValue}
        size={sizeValue}
        icon={<AbTesting />}
        shape={shapeValue}
        bgColor={bgColorValue}
        borderColor={borderColorValue}
        borderWidth={strokeValue}
        borderRadius={radiusValue}
      />
      <Avatar
      alt="Avatar"
        src={srcValue}
        blur={blurValue}
        size={sizeValue}
        icon={<AbTesting />}
        shape={shapeValue}
        bgColor={bgColorValue}
        borderColor={borderColorValue}
        borderWidth={strokeValue}
        borderRadius={radiusValue}
      />
  </AvatarGroup>
  )
};
