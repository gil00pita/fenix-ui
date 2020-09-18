/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import styled from 'styled-components';
import { Text } from '../../Atoms/Typography'
import Button from '.';

export default {
  title: "Molecules/Button",
  decorators: [withKnobs]
};

export const ButtonPlayground = () => {
  const groupId = 'Button settings';

  const typeLabel = 'Type of Button';
  const typeDefaultValue = 'default';
  const typeOptions = {
    Default: 'default',
    Raised: 'raised',
    Dashed: 'dashed',
    Text: 'text',
    Link: 'link',
    Ghost : 'ghost'
  };

  const sizeLabel = 'Size of Button';
  const sizeDefaultValue = 'medium';
  const sizeOptions = {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
  };

  const loadingLabel = 'Loading';
  const loadingDefaultValue = false;

  const blockLabel = 'Block (Full Width)';
  const blockDefaultValue = false;

  const disabledLabel = 'Disabled';
  const disabledDefaultValue = false;

  const textLabel = 'Title';
  const textDefaultValue = 'Button';

  const borderRadiusLabel = 'Border Radius';
  const borderRadiusDefaultValue = '';

  const borderWidthLabel = 'Border Width';
  const borderWidthDefaultValue = '';
  const borderWidthOptions = {
    range: true,
    min: 0,
    max: 4,
    step: 0.5,
  };
  const colorLabel = 'Color';
  const colorDefaultValue = '';

  const textValue = text(textLabel, textDefaultValue, groupId);
  const typeValue = select(typeLabel, typeOptions, typeDefaultValue, groupId);
  const sizeValue = select(sizeLabel, sizeOptions, sizeDefaultValue, groupId);
  const loadingValue = boolean(loadingLabel, loadingDefaultValue, groupId);
  const blockValue = boolean(blockLabel, blockDefaultValue, groupId);
  const disabledValue = boolean(disabledLabel, disabledDefaultValue, groupId);
  const borderRadiusValue = text(borderRadiusLabel, borderRadiusDefaultValue, groupId);
  const borderWidthValue = number(borderWidthLabel, borderWidthDefaultValue, borderWidthOptions, groupId);
  const colorValue = color(colorLabel, colorDefaultValue, groupId);


  return (
    <>
      <Button
      color={colorValue}
      borderRadius={borderRadiusValue}
      borderWidth={borderWidthValue}
      type={typeValue}
      size={sizeValue}
      loading={loadingValue}
      block={blockValue}
      disabled={disabledValue}
    >
      {textValue}
    </Button>
    <Button
      color={colorValue}
      borderRadius={borderRadiusValue}
      borderWidth={borderWidthValue}
      type="raised"
      size={sizeValue}
      loading={loadingValue}
      block={blockValue}
      disabled={disabledValue}
    >
      {textValue}
    </Button>
    <Button
      color={colorValue}
      borderRadius={borderRadiusValue}
      borderWidth={borderWidthValue}
      type="ghost"
      size={sizeValue}
      loading={loadingValue}
      block={blockValue}
      disabled={disabledValue}
    >
      {textValue}
    </Button>
    <Button
      color={colorValue}
      borderRadius={borderRadiusValue}
      borderWidth={borderWidthValue}
      type="dashed"
      size={sizeValue}
      loading={loadingValue}
      block={blockValue}
      disabled={disabledValue}
    >
      {textValue}
    </Button>
  </>
  )
};

export const ButtonColors = () => {
  const groupId = 'Button settings';

  const sizeLabel = 'Size of Button';
  const sizeDefaultValue = 'medium';
  const sizeOptions = {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
  };

  const loadingLabel = 'Loading';
  const loadingDefaultValue = false;

  const blockLabel = 'Block (Full Width)';
  const blockDefaultValue = false;

  const disabledLabel = 'Disabled';
  const disabledDefaultValue = false;

  const textLabel = 'Title';
  const textDefaultValue = 'Button';

  const borderRadiusLabel = 'Border Radius';
  const borderRadiusDefaultValue = '';

  const borderWidthLabel = 'Border Width';
  const borderWidthDefaultValue = '';
  const borderWidthOptions = {
    range: true,
    min: 0,
    max: 4,
    step: 0.5,
  };

  const textValue = text(textLabel, textDefaultValue, groupId);
  const sizeValue = select(sizeLabel, sizeOptions, sizeDefaultValue, groupId);
  const loadingValue = boolean(loadingLabel, loadingDefaultValue, groupId);
  const blockValue = boolean(blockLabel, blockDefaultValue, groupId);
  const disabledValue = boolean(disabledLabel, disabledDefaultValue, groupId);
  const borderRadiusValue = text(borderRadiusLabel, borderRadiusDefaultValue, groupId);
  const borderWidthValue = number(borderWidthLabel, borderWidthDefaultValue, borderWidthOptions, groupId);

  return (
    <>
    <div>
      <Button
        color="primary"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="info"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="success"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="processing"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="error"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="highlight"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="warning"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="black"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="disabled"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled
      >
        {textValue}
      </Button>
    </div>
    <br/>
    <div>
      <Button
        color="primary"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="info"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="success"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="processing"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="error"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="highlight"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="warning"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="black"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="disabled"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="raised"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled
      >
        {textValue}
      </Button>
    </div>
    <br/>
    <div>
      <Button
        color="primary"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="info"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="success"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="processing"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="error"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="highlight"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="warning"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="black"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="disabled"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="dashed"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled
      >
        {textValue}
      </Button>
    </div>
    <br/>
    <div>
      <Button
        color="primary"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="info"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="success"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="processing"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="error"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="highlight"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="warning"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="black"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled={disabledValue}
      >
        {textValue}
      </Button>
      <Button
        color="disabled"
        borderRadius={borderRadiusValue}
        borderWidth={borderWidthValue}
        type="ghost"
        size={sizeValue}
        loading={loadingValue}
        block={blockValue}
        disabled
      >
        {textValue}
      </Button>
    </div>
  </>
  )
};
