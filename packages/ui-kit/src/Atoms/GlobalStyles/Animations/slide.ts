import { keyframes } from 'styled-components';

export const slideUpIn = keyframes`
  0% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
`;

export const slideUpOut = keyframes`
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
`;

export const slideDownIn = keyframes`
  0% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
`;

export const slideDownOut = keyframes`
  0% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
`;

export const slideLeftIn = keyframes`
  0% {
    transform: scaleX(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
`;

export const slideLeftOut = keyframes`
  0% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
`;

export const slideRightIn = keyframes`
  0% {
    transform: scaleX(0.8);
    transform-origin: 100% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
`;

export const slideRightOut = keyframes`
  0% {
    transform: scaleX(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(0.8);
    transform-origin: 100% 0%;
    opacity: 0;
  }
`;
