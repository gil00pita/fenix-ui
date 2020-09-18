/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createElement } from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import { H1, H2, H3, H4, H5, H6, P, Code, Mark, Text } from '.';

export default {
  title: "Atoms/Typography",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/5e7a6d478204d59183a1c76b/styleguide/components?coid=5eac833c5f1f2f1cb19f4f19",
  },
  decorators: [withKnobs],
};

export const TypographyPlayground = () => {
  const groupId = 'Typography settings';

  const stringLabel = 'Value';
  const stringDefaultValue = 'The quick brown fox jumps over the lazy dog';

  const styleLabel = 'Style';
  const styleDefaultValue = 'normal';
  const styleOptions = {
    Italic: "italic",
    Oblique: "oblique",
    Normal: "normal",
    Inherit :"inherit"
  };

  const weightLabel = 'Font Weight';
  const weightDefaultValue = '400';
  const weightOptions = {
    Hairline: "100",
    ExtraLight: "200",
    Light: "300",
    Normal: "400",
    Medium: "500",
    SemiBold: "600",
    Bold: "700",
    ExtraBold: "800",
    Heavy: "900",
    Inherit: "inherit"
  };

  const titleLabel = 'Title';
  const titleDefaultValue = 'Title Here';

  const colorLabel = 'Color';
  const colorDefaultValue = '#000';

  const avoidSelectLabel = 'Avoid Select Text';
  const avoidSelectDefaultValue = false;

  const ellipsisLabel = 'Ellipsis';
  const ellipsisDefaultValue = false;

  const colorValue = color(colorLabel, colorDefaultValue, groupId);
  const stringValue = text(stringLabel, stringDefaultValue, groupId);
  const titleValue = text(titleLabel, titleDefaultValue, groupId);
  const avoidSelectValue = boolean(avoidSelectLabel, avoidSelectDefaultValue, groupId);
  const ellipsisValue = boolean(ellipsisLabel, ellipsisDefaultValue, groupId);
  const weightValue = select(weightLabel, weightOptions, weightDefaultValue, groupId);
  const styleValue = select(styleLabel, styleOptions, styleDefaultValue, groupId);

  return (
    <>
      <H1
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="1"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H1>
      <H2
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="2"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H2>
      <H3
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="3"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H3>
      <H4
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="4"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H4>
      <H5
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="5"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H5>
      <H6
        fontWeight={weightValue}
        fontStyle={styleValue}
        level="6"
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </H6>
      <Code
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
          {stringValue}
      </Code>
      <br/>
      <Mark
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
        >
          {stringValue}
      </Mark>
      <br/>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color={colorValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
    </>
  )
};

export const TypographyColors = () => {
  const groupId = 'Typography settings';

  const stringLabel = 'Value';
  const stringDefaultValue = 'The quick brown fox jumps over the lazy dog';

  const styleLabel = 'Style';
  const styleDefaultValue = 'normal';
  const styleOptions = {
    Italic: "italic",
    Oblique: "oblique",
    Normal: "normal",
    Inherit :"inherit"
  };

  const weightLabel = 'Font Weight';
  const weightDefaultValue = '400';
  const weightOptions = {
    Hairline: "100",
    ExtraLight: "200",
    Light: "300",
    Normal: "400",
    Medium: "500",
    SemiBold: "600",
    Bold: "700",
    ExtraBold: "800",
    Heavy: "900",
    Inherit: "inherit"
  };

  const titleLabel = 'Title';
  const titleDefaultValue = 'Title Here';

  const avoidSelectLabel = 'Avoid Select Text';
  const avoidSelectDefaultValue = false;

  const ellipsisLabel = 'Ellipsis';
  const ellipsisDefaultValue = false;

  const stringValue = text(stringLabel, stringDefaultValue, groupId);
  const titleValue = text(titleLabel, titleDefaultValue, groupId);
  const avoidSelectValue = boolean(avoidSelectLabel, avoidSelectDefaultValue, groupId);
  const ellipsisValue = boolean(ellipsisLabel, ellipsisDefaultValue, groupId);
  const weightValue = select(weightLabel, weightOptions, weightDefaultValue, groupId);
  const styleValue = select(styleLabel, styleOptions, styleDefaultValue, groupId);

  return (
    <>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        disabled
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="primary"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="secondary"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="success"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="warning"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="error"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
      <P
        fontWeight={weightValue}
        fontStyle={styleValue}
        color="inverse"
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
      >
        {stringValue}
      </P>
    </>
  )
};


export const TypographyVariations = () => {
  const groupId = 'Typography settings';

  const stringLabel = 'Value';
  const stringDefaultValue = 'The quick brown fox jumps over the lazy dog';

  const elementLabel = 'Element Type';
  const elementDefaultValue = 'p';
  const elementOptions = {
    P: "p",
    Span: "span",
    div: "div"
  };

  const variationLabel = 'Text Type';
  const variationDefaultValue = 'inherit';
  const variationOptions = {
    Body1: "body1",
    Body2: "body2",
    Button: "button",
    Overline: "overline",
    Inherit: "inherit",
    Subtitle1: "subtitle1",
    Subtitle2: "subtitle2",
    Caption :"caption"
  };

  const alignLabel = 'Text Alignment';
  const alignDefaultValue = 'inherit';
  const alignOptions = {
    Center: "center",
    Justify: "justify",
    Left: "left",
    Right :"right",
    Inherit :"inherit"
  };

  const weightLabel = 'Font Weight';
  const weightDefaultValue = '400';
  const weightOptions = {
    Hairline: "100",
    ExtraLight: "200",
    Light: "300",
    Normal: "400",
    Medium: "500",
    SemiBold: "600",
    Bold: "700",
    ExtraBold: "800",
    Heavy: "900",
    Inherit: "inherit"
  };

  const titleLabel = 'Title';
  const titleDefaultValue = 'Title Here';

  const avoidSelectLabel = 'Avoid Select Text';
  const avoidSelectDefaultValue = false;

  const ellipsisLabel = 'Ellipsis';
  const ellipsisDefaultValue = false;

  const rtlLabel = 'RTL';
  const rtlDefaultValue = false;

  const noWrapLabel = 'No Wrap';
  const noWrapDefaultValue = false;

  const stringValue = text(stringLabel, stringDefaultValue, groupId);
  const titleValue = text(titleLabel, titleDefaultValue, groupId);
  const rtlSelectValue = boolean(rtlLabel, rtlDefaultValue, groupId);
  const noWrapSelectValue = boolean(noWrapLabel, noWrapDefaultValue, groupId);
  const avoidSelectValue = boolean(avoidSelectLabel, avoidSelectDefaultValue, groupId);
  const ellipsisValue = boolean(ellipsisLabel, ellipsisDefaultValue, groupId);
  const weightValue = select(weightLabel, weightOptions, weightDefaultValue, groupId);
  const alignValue = select(alignLabel, alignOptions, alignDefaultValue, groupId);
  const variationValue = select(variationLabel, variationOptions, variationDefaultValue, groupId);
  const elementValue = select(elementLabel, elementOptions, elementDefaultValue, groupId);

  return (
    <>
      <Text
        align={alignValue}
        variation={variationValue}
        element={elementValue}
        weight={weightValue}
        title={titleValue}
        avoidSelect={avoidSelectValue}
        ellipsis={ellipsisValue}
        noWrap={noWrapSelectValue}
        rtl={rtlSelectValue}
      >
        {stringValue}
      </Text>
    </>
  )
};
