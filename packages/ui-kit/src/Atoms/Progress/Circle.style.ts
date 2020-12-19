/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

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
  border-radius: ${({ theme }) => theme.progress.progressRadius};
  ${(props: Styles) => circleStyle(props)}
`;

