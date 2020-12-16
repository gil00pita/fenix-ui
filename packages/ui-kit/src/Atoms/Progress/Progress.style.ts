/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';
import { ProgressType } from './Progress';

interface Styles {
  isGradient?: boolean;
  circleSize?: string;
  theme: DefaultTheme;
  type?: ProgressType;
}

const progressStyle = ({theme, circleSize, isGradient, type}: Styles) => {
  if (type === 'line') {
    return `
      display: inline-block;
      width: 2em;
      margin-left: 8px;
      color: @text-color-secondary;
      font-size: @progress-text-font-size;
      line-height: 1;
      white-space: nowrap;
      text-align: left;
      vertical-align: middle;
      word-break: normal;
      .@{iconfont-css-prefix} {
        font-size: @font-size-base;
      }
    `
  } else if (type === 'circle' || type === 'dashboard') {
    return `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      margin: 0;
      padding: 0;
      color: @progress-text-color;
      font-size: @progress-circle-text-font-size;
      line-height: 1;
      white-space: normal;
      text-align: center;
      transform: translate(-50%, -50%);

      .@{iconfont-css-prefix} {
        font-size: 14 / 12em;
      }
    `
  }
}

export const LabelWrapper = styled.span`
  ${(props: Styles) => progressStyle(props)}
`;
