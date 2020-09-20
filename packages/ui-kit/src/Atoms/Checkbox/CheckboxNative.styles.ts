/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, keyframes, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';

const aniCheckboxIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(45deg);
  }
`;

const aniCheckboxOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const animationCheckboxOut = props => css`${aniCheckboxOut}`;
const animationCheckboxIn = props => css`${aniCheckboxIn}`;

interface Styles {
  checked?: boolean;
  children?: React.ReactNode;
}

const checkedStatus = ({theme, checked}: SizeStyles) => {
  if(checked) {
    return `
      border-color: #3dbcf6;
      background-color: #3dbcf6;

      &:after {
        transform: rotate(45deg);
        position: absolute;
        left: 4px;
        top: 1px;
        display: table;
        width: 5px;
        height: 8px;
        border: 2px solid #ffffff;
        border-top: 0;
        border-left: 0;
        content: ' ';
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-duration: 0.3s;
        animation-name: amCheckboxOut;
      }

      @media print {
        box-shadow: inset 0 0 0 16px #3dbcf6;
      }
    `;
  }
}

const disabledStatus = ({theme, disabled}: SizeStyles) => {
  if(disabled) {
    return `
      border-color: #d9d9d9;
      background-color: #f3f3f3;

      &:after {
        animation-name: none;
        border-color: #f3f3f3;
      }
    `;
  }
}

export const StyledInnerCheckbox = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #d9d9d9;
  background-color: #ffffff;
  transition: border-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:after {
    animation-duration: 0.3s;
    animation-name: ${animationCheckboxOut};
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    border-left: 0;
    border-top: 0;
    border: 2px solid #ffffff;
    content: ' ';
    display: table;
    height: 8px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg);
    width: 5px;
  }
  ${(props: Styles) => checkedStatus(props)}
  ${(props: Styles) => disabledStatus(props)}
`;

export const StyledCheckboxContainer = styled.span`
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  outline: none;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;

  &:hover ${StyledInnerCheckbox} {
    border-color: #3dbcf6;
  }

  &:focus + ${StyledInnerCheckbox} {
    border-color: #3dbcf6;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  left: 0;
  z-index: 9999;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export default StyledCheckbox;

/*
// Default state
.rc-checkbox {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  position: relative;
  line-height: 1;
  vertical-align: middle;

  &:hover .rc-checkbox-inner,
  &-input:focus + .rc-checkbox-inner {
    border-color: #3dbcf6;
  }

  &-inner {
    &:after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      left: 4px;
      top: 1px;
      display: table;
      width: 5px;
      height: 8px;
      border: 2px solid #ffffff;
      border-top: 0;
      border-left: 0;
      content: ' ';
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-duration: 0.3s;
      animation-name: amCheckboxOut;
    }

    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: #d9d9d9;
    background-color: #ffffff;
    transition: border-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &-input {
    position: absolute;
    left: 0;
    z-index: 9999;
    cursor: pointer;
    opacity: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
}

// Checked state
.rc-checkbox-checked {

  &:hover {
    .rc-checkbox-inner {
      border-color: #3dbcf6;
    }
  }

  .rc-checkbox-inner {
    border-color: #3dbcf6;
    background-color: #3dbcf6;

    &:after {
      transform: rotate(45deg);
      position: absolute;
      left: 4px;
      top: 1px;
      display: table;
      width: 5px;
      height: 8px;
      border: 2px solid #ffffff;
      border-top: 0;
      border-left: 0;
      content: ' ';
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-duration: 0.3s;
      animation-name: amCheckboxOut;
    }

    @media print {
      box-shadow: inset 0 0 0 16px #3dbcf6;
    }
  }
}

.rc-checkbox-disabled {

  &.rc-checkbox-checked {

    &:hover {
      .rc-checkbox-inner {
        border-color: #d9d9d9;
      }
    }

    .rc-checkbox-inner {
      background-color: #f3f3f3;
      border-color: #d9d9d9;

      &:after {
        animation-name: none;
        border-color: #cccccc;
      }

      @media print {
        box-shadow: inset 0 0 0 16px #f3f3f3;
      }
    }
  }

  &:hover {
    .rc-checkbox-inner {
      border-color: #d9d9d9;
    }
  }

  .rc-checkbox-inner {
    border-color: #d9d9d9;
    background-color: #f3f3f3;
    &:after {
      animation-name: none;
      border-color: #f3f3f3;
    }
  }

  .rc-checkbox-input {
    cursor: default;
  }
}

@keyframes amCheckboxIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(45deg);
  }
}

@keyframes amCheckboxOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

*/
