/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import Avatar from './Avatar';
import { AbTesting } from '@fenix-ui/icons/mdc';

export default {
  title: "Atoms/Avatar",
  decorators: [withKnobs]
};


export const ImageAvatar  = () => {
  const groupId = 'variations';

  const shapeLabel = 'Shape?';
  const shapeDefaultValue = 'square';
  const shapeOptions = {
    Square: 'square',
    Circle: 'circle'
  };

  const strokeLabel = 'Border Width';
  const strokeDefaultValue = 0;
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
  const borderColorDefaultValue = '#ff00ff';

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#ccc';

  const srcLabel = 'Image Src';
  const srcDefaultValue = 'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg';

  const strokeValue = number(strokeLabel, strokeDefaultValue, strokeOptions, groupId);
  const radiusValue = number(radiusLabel, radiusDefaultValue, radiusOptions, groupId);
  const blurValue = number(blurLabel, blurDefaultValue, blurOptions, groupId);
  const sizeValue = number(sizeLabel, sizeDefaultValue, sizeOptions, groupId);
  const shapeValue = select(shapeLabel, shapeOptions, shapeDefaultValue, groupId);
  const borderColorValue = color(borderColorLabel, borderColorDefaultValue, groupId);
  const bgColorValue = color(bgColorLabel, bgDefaultValue, groupId);
  const srcValue = text(srcLabel, srcDefaultValue, groupId);

  return (
    <React.Fragment>
    <Avatar
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
  </React.Fragment>
  );
};

export const IconAvatar = () => {
  const groupId = 'variations';

  const shapeLabel = 'Shape?';
  const shapeDefaultValue = 'square';
  const shapeOptions = {
    Square: 'square',
    Circle: 'circle'
  };

  const strokeLabel = 'Stroke Width';
  const strokeDefaultValue = 0;
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
  const borderColorDefaultValue = '#ff00ff';

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#ccc';

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
    <Avatar
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
  )
};
