import { keyframes } from 'styled-components';

export const progressActive = keyframes`
  0% {
    width: 0;
    opacity: 0.1;
  }
  20% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
`;
