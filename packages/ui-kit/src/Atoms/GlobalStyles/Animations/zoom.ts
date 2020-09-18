
import { keyframes } from 'styled-components';

export const zoomIn = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
    opacity: 0;
  }
`;

export const zoomBigIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const zoomBigOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
`;

export const zoomUpIn = keyframes`
  0% {
    transform: scale(0.8);
    transform-origin: 50% 0%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
  }
`;

export const zoomZoomUpOut = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 50% 0%;
  }
  100% {
    transform: scale(0.8);
    transform-origin: 50% 0%;
    opacity: 0;
  }
`;

export const zoomLeftIn = keyframes`
  0% {
    transform: scale(0.8);
    transform-origin: 0% 50%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 50%;
  }
`;

export const zoomLeftOut = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 0% 50%;
  }
  100% {
    transform: scale(0.8);
    transform-origin: 0% 50%;
    opacity: 0;
  }
`;

export const zoomRightIn = keyframes`
  0% {
    transform: scale(0.8);
    transform-origin: 100% 50%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 50%;
  }
`;

export const zoomRightOut = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 100% 50%;
  }
  100% {
    transform: scale(0.8);
    transform-origin: 100% 50%;
    opacity: 0;
  }
`;

export const zoomDownIn = keyframes`
  0% {
    transform: scale(0.8);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
`;

export const zoomDownOut = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(0.8);
    transform-origin: 50% 100%;
    opacity: 0;
  }
`;
