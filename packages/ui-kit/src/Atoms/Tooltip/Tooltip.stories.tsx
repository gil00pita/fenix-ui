/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";
import Tooltip from '.';
import Button from '../../Molecules/Button';
import styled from 'styled-components';
import { Text } from '../Typography'

export default {
  title: "Atoms/Tooltips",
  decorators: [withKnobs]
};

export const TooltipPlayground = () => {
  const groupId = 'Tooltip settings';

  const placementLabel = 'Placement';
  const placementDefaultValue = 'top';
  const placementOptions = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
    TopLeft: 'topLeft',
    TopRight: 'topRight',
    BottomLeft: 'bottomLeft',
    BottomRight: 'bottomRight',
    LeftTop: 'leftTop',
    LeftBottom: 'leftBottom',
    RightTop: 'rightTop',
    RightBottom: 'rightBottom'
  };

  const triggerLabel = 'Trigger';
  const triggerDefaultValue = 'hover';
  const triggerOptions = {
    Hover: 'hover',
    Focus: 'focus',
    Click: 'click',
    ContextMenu: 'contextMenu'
  };

  const titleLabel = 'Title';
  const titleDefaultValue = 'Tooltip Here';

  const autoAdjLabel = 'Auto Adjust Overflow?';
  const autoAdjDefaultValue = true;

  const visibleLabel = 'Visible';
  const visibleDefaultValue = true;

  const defaultVisibleLabel = 'Default Visible?';
  const defaultVisibleDefaultValue = false;

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#ff00ff';

  const colorLabel = 'Color';
  const colorDefaultValue = '#fff';

  const mouseLeaveDelayLabel = 'Mouse Leave Delay';
  const mouseLeaveDelayDefaultValue = 0.1;

  const mouseEnterDelayLabel = 'Mouse Enter Delay';
  const mouseEnterDelayDefaultValue = 0.1;

  const placementValue = select(placementLabel, placementOptions, placementDefaultValue, groupId);
  const triggerValue = select(triggerLabel, triggerOptions, triggerDefaultValue, groupId);
  const bgColorValue = color(bgColorLabel, bgDefaultValue, groupId);
  const colorValue = color(colorLabel, colorDefaultValue, groupId);
  const autoAdjustOverflowValue = boolean(autoAdjLabel, autoAdjDefaultValue, groupId);
  const arrowPointAtCenterValue = boolean(autoAdjLabel, autoAdjDefaultValue, groupId);
  const visibleValue = boolean(visibleLabel, visibleDefaultValue, groupId);
  const defaultVisibleValue = boolean(defaultVisibleLabel, defaultVisibleDefaultValue, groupId);
  const mouseLeaveDelayValue = number(mouseLeaveDelayLabel, mouseLeaveDelayDefaultValue, groupId);
  const mouseEnterDelayValue = number(mouseEnterDelayLabel, mouseEnterDelayDefaultValue, groupId);
  const titleValue = text(titleLabel, titleDefaultValue, groupId);

  return (
    <Tooltip
    title={titleValue}
    defaultVisible={defaultVisibleValue}
    visible={visibleValue}
    autoAdjustOverflow={autoAdjustOverflowValue}
    arrowPointAtCenter={arrowPointAtCenterValue}
    bgColor={bgColorValue}
    color={colorValue}
    placement={placementValue}
    mouseLeaveDelay={mouseLeaveDelayValue}
    mouseEnterDelay={mouseEnterDelayValue}
    trigger={triggerValue}
    >
      <Text varitation="body1" element="span">Hello Tooltip</Text>
    </Tooltip>
  )
};

export const TooltipPlacement = () => {
  const groupId = 'Tooltip settings';

  const titleLabel = 'Title';
  const titleDefaultValue = 'Tooltip';

  const bgColorLabel = 'Background Color';
  const bgDefaultValue = '#4A90E2';

  const colorLabel = 'Color';
  const colorDefaultValue = '#fff';

  const mouseLeaveDelayLabel = 'Mouse Leave Delay';
  const mouseLeaveDelayDefaultValue = 0.1;

  const mouseEnterDelayLabel = 'Mouse Enter Delay';
  const mouseEnterDelayDefaultValue = 0.1;

  const hideArrowLabel = 'Hide Arrow';
  const hideArrowDefaultValue = false;

  const triggerLabel = 'Trigger';
  const triggerDefaultValue = 'hover';
  const triggerOptions = {
    Hover: 'hover',
    Focus: 'focus',
    Click: 'click',
    rightClick: 'right-click',
    ContextMenu: 'contextMenu'
  };

  const bgColorValue = color(bgColorLabel, bgDefaultValue, groupId);
  const colorValue = color(colorLabel, colorDefaultValue, groupId);
  const mouseLeaveDelayValue = number(mouseLeaveDelayLabel, mouseLeaveDelayDefaultValue, groupId);
  const mouseEnterDelayValue = number(mouseEnterDelayLabel, mouseEnterDelayDefaultValue, groupId);
  const titleValue = text(titleLabel, titleDefaultValue, groupId);
  const hideArrowValue = boolean(hideArrowLabel, hideArrowDefaultValue, groupId);
  const triggerValue = select(triggerLabel, triggerOptions, triggerDefaultValue, groupId);

  const buttonWidth = 70;

  const Demo = styled.div`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Demo>
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip
        trigger={triggerValue}
        title={titleValue}
        bgColor={bgColorValue}
        color={colorValue}
        hideArrow={hideArrowValue}
        mouseLeaveDelay={mouseLeaveDelayValue}
        mouseEnterDelay={mouseEnterDelayValue}
        placement="topLeft"
      >
        <Button>TL</Button>
      </Tooltip>
      <Tooltip
        trigger={triggerValue}
        placement="top"
        hideTooltip
        title={titleValue}
        bgColor={bgColorValue}
        color={colorValue}
        hideArrow={hideArrowValue}
        mouseLeaveDelay={mouseLeaveDelayValue}
        mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>Top</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="topRight"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth-2, float: 'left' }}>
      <Tooltip
      trigger={triggerValue}
      placement="leftTop"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>LT</Button>
      </Tooltip>
      <Tooltip
      placement="left"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>Left</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="leftBottom"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Tooltip
      trigger={triggerValue}
      placement="rightTop"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>RT</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="right"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>Right</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="rightBottom"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip
      trigger={triggerValue}
      placement="bottomLeft"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>BL</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="bottom"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip
      trigger={triggerValue}
      placement="bottomRight"
      title={titleValue}
      bgColor={bgColorValue}
      color={colorValue}
      hideArrow={hideArrowValue}
      mouseLeaveDelay={mouseLeaveDelayValue}
      mouseEnterDelay={mouseEnterDelayValue}
      >
        <Button>BR</Button>
      </Tooltip>
    </div>
  </Demo>
  )
};
