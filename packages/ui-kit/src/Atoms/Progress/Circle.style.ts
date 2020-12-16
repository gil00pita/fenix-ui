/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';

interface Styles {
  isGradient?: boolean;
  circleSize?: string;
  theme: DefaultTheme;
}

const circleStyle = ({circleSize, isGradient}: Styles) => {
  if(isGradient) {
    return `
      width: ${circleSize};
      height: ${circleSize};
      fontSize: ${circleSize} * 0.15 + 6;
    `
  } else {
    return `
      width: ${circleSize};
      height: ${circleSize};
      fontSize: ${circleSize} * 0.15 + 6;
    `
  }
}

export const StyledCircleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.progress.progressRadius}; /* @progress-radius; */
  ${(props: Styles) => circleStyle(props)}
`;

