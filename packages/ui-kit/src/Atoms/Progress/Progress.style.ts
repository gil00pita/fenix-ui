/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';
import { ProgressType } from './Progress';

interface ColorStyles {
  theme: DefaultTheme;
  progressStatus?: string;
  color?: string;
}
interface Styles {
  isGradient?: boolean;
  circleSize?: string;
  progressStatus?: string;
  theme: DefaultTheme;
  type?: ProgressType;
  color?: string;
}

const variantColor= ({ color, progressStatus, theme }: ColorStyles) => {
  let finalColor;
  switch (progressStatus) {
    case 'normal':
      finalColor = color || theme.font.textColorSecondary;
      break;
    case 'exception':
      finalColor = theme.colors.error;
      break;
    case 'active':
      finalColor = theme.background.componentBackground;
      break;
    case 'success':
      finalColor = theme.colors.success;
      break;
    default:
      finalColor = color || theme.font.textColorSecondary;
  }
  return finalColor;
};

const progressStyle = ({theme, color, progressStatus, type}: Styles) => {
  if (type === 'line') {
    return `
      display: inline-block;
      width: 2em;
      margin-left: 8px;
      color: ${(props: Styles) => variantColor(props)};
      font-size: ${({ theme }) => theme.progress.progressCircleTextFontSize};
      line-height: 1;
      white-space: nowrap;
      text-align: left;
      vertical-align: middle;
      word-break: normal;
    `
  } else if (type === 'circle' || type === 'dashboard') {
    return `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      margin: 0;
      padding: 0;
      color: ${(props: Styles) => variantColor(props)};
      font-size: ${({ theme }) => theme.progress.progressCircleTextFontSize};
      line-height: 1;
      white-space: normal;
      text-align: center;
      transform: translate(-50%, -50%);
    `
  }
}

export const LabelWrapper = styled.span`
  ${(props: Styles) => progressStyle(props)}
`;
