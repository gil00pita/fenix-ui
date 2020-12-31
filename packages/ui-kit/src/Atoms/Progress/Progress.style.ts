/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
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
      return typeof strokeColor === 'object' ? strokeColor[Object.keys(strokeColor)[1]] : strokeColor ?? theme.progress.progressTextColor;
    case 'exception':
      return theme.colors.error;
    case 'active':
      return theme.background.componentBackground;
    case 'success':
      return theme.colors.success;
    default:
      return typeof strokeColor === 'object' ? strokeColor[Object.keys(strokeColor)[1]] : strokeColor ?? theme.progress.progressTextColor;
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


const div: StyledFunction<Styles & React.HTMLProps<HTMLInputElement>> = styled.div

export const LineOuter = div`
  display: inline-block;
  margin-right: 0;
  margin-right: calc(-2em - 8px);
  padding-right: 0;
  padding-right: calc(2em + 8px);
  width: 100%;
`;

export const LineInner = div`
  background-color: ${({ theme }) => theme.progress.progressRemainingColor};
  border-radius: ${({ theme }) => theme.progress.progressRadius}px;
  display: inline-block;
  overflow: hidden;
  position: relative;
  stroke: ${({ theme }) => theme.progress.progressDefaultColor};
  vertical-align: middle;
  width: 100%;
`;


export const LineBG = div`
  background-color: ${({ theme }) => theme.progress.progressDefaultColor};
  border-radius: ${({ theme }) => theme.progress.progressRadius}px;
  position: relative;
  transition: all 0.4s ${({ theme }) => theme.animation.easeOutCirc} 0s;
`;

export const LineText = div`
  color: ${({ theme }) => theme.font.textColorSecondary};
  display: inline-block;
  font-size: ${({ theme }) => theme.progress.progressCircleTextFontSize};
  line-height: 1;
  margin-left: 8px;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
  width: 2em;
  word-break: normal;
`;

export const LineSuccessBG = div`
  background-color: ${({ theme }) => theme.progress.progressDefaultColor};
  border-radius: ${({ theme }) => theme.progress.progressRadius}px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.4s ${({ theme }) => theme.animation.easeOutCirc} 0s;
  `;
  // background-color: ${({ theme }) => theme.colors.success};
