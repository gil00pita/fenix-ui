/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';

interface Styles {
  theme: DefaultTheme;
  progressStatus: string;
  stroke: string;
}

const progressAppear = keyframes`
  0% {
    stroke-width: 0;
  }
  100% {
    stroke-width: 6px;
  }
`;

const variantColor= ({ stroke, progressStatus, theme }: Styles) => {
  let finalColor;
  switch (progressStatus) {
    case 'normal':
      finalColor = stroke || theme.progress.progressDefaultColor;
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
      finalColor = stroke || theme.progress.progressDefaultColor;
  }
  return finalColor;
};

export const StyledPath = styled.path`
  animation: ${progressAppear} 0.3s;
  stroke:  ${(props: Styles) => variantColor(props)};
`;

export const StyledCircle = styled.svg`
  position: relative;
  line-height: 1;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
  color:  ${({ theme }) => theme.progress.progressTextColor}; /* @progress-text-color; */
  font-size: ${({ theme }) => theme.progress.progressCircleTextFontSize}; /* @progress-circle-text-font-size; */
  line-height: 1;
  white-space: normal;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const StyledPathTrail = styled.path`
  stroke: ${({ theme }) => theme.progress.progressRemainingColor}; /* @progress-remaining-color; */
`;
