/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import { ProgressType } from './Progress';


interface Styles {
  isGradient?: boolean;
  circleSize?: string;
  progressStatus?: string;
  theme: DefaultTheme;
  type?: ProgressType;
  strokeColor?: string;
}

const labelWrapper: StyledFunction<Styles & React.HTMLProps<HTMLInputElement>> = styled.span

const handleColorType = (progressStatus, strokeColor, theme) => {

  switch (progressStatus) {
    case 'normal':
      return typeof strokeColor === 'object' ? strokeColor[Object.keys(strokeColor)[1]] : strokeColor ?? theme.font.textColorSecondary;
    case 'exception':
      return theme.colors.error;
    case 'active':
      return theme.background.componentBackground;
    case 'success':
      return theme.colors.success;
    default:
      return typeof strokeColor === 'object' ? strokeColor[Object.keys(strokeColor)[1]] : strokeColor ?? theme.font.textColorSecondary;
  }
};


const progressStyle = (props: Styles) => {

  const color = handleColorType(props.progressStatus, props.strokeColor, props.theme);
  const fontSize = props.theme.progress.progressCircleTextFontSize;

  if (props.type === 'line') {
    return `
      color: ${color};
      display: inline-block;
      font-size: ${fontSize};
      line-height: 1;
      margin-left: 8px;
      text-align: left;
      vertical-align: middle;
      white-space: nowrap;
      width: 2em;
      word-break: normal;
    `
  } else if (props.type === 'circle' || props.type === 'dashboard') {
    return `
      color: ${color};
      font-size: ${fontSize};
      left: 50%;
      line-height: 1;
      margin: 0;
      padding: 0;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
      white-space: normal;
      width: 100%;
    `
  }
}


export const LabelWrapper = labelWrapper`
  ${(props: Styles) => progressStyle(props)}
`;

