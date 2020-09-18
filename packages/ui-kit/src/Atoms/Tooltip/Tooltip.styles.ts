import { zoomBigIn } from './../GlobalStyles/Animations/zoom';
import { fade } from '@fenix-ui/utils/lib/colorManipulator';
/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, css } from 'styled-components';
import reset from '../GlobalStyles/Reset';

interface Styles {
  theme: DefaultTheme;
  bgColor: string;
  color: string;
  placement: string;
}

const tooltipArrowShadowWidth = 3;
const tooltipArrowOffsetVertical = 5; // 8 - 3px
const tooltipArrowOffsetHorizontal = 13; // 16 - 3px

const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
}

const tooltipArrowRotateWidth = ( tooltipArrowWidth ) => {
  return round(Math.sqrt((tooltipArrowShadowWidth * tooltipArrowWidth * 2) + tooltipArrowShadowWidth * 2), 2);
};

const tooltipArrowContentPlacement = ({ placement, theme }: Styles) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return css`
        box-shadow: ${tooltipArrowShadowWidth}px ${tooltipArrowShadowWidth}px 7px ${fade('#000', 0.07)};
        transform: translateY(-${({ theme }) => tooltipArrowRotateWidth(theme.tooltip.tooltipArrowWidth) / 2}px) rotate(45deg);
      `;
    case 'left':
    case 'left-end':
    case 'left-start':
      return css`
        box-shadow: ${tooltipArrowShadowWidth}px -${tooltipArrowShadowWidth}px 7px ${fade('#000', 0.07)};
        transform: translateX(-${({ theme }) => tooltipArrowRotateWidth(theme.tooltip.tooltipArrowWidth) / 2}px) rotate(45deg);
      `;
    case 'right':
    case 'right-start':
    case 'right-end':
      return css`
        box-shadow: -${tooltipArrowShadowWidth}px ${tooltipArrowShadowWidth}px 7px ${fade('#000', 0.07)};
        transform: translateX(${({ theme }) => tooltipArrowRotateWidth(theme.tooltip.tooltipArrowWidth) / 2}px) rotate(45deg);
      `;
    case 'bottom':
    case 'bottom-end':
    case 'bottom-start':
      return css`
        box-shadow: -${tooltipArrowShadowWidth}px -${tooltipArrowShadowWidth}px 7px ${fade('#000', 0.07)};
        transform: translateY(${({ theme }) => tooltipArrowRotateWidth(theme.tooltip.tooltipArrowWidth) / 2}px) rotate(45deg);
      `;
    default:
      return css`
        display: none;
      `;
  }
}

const tooltipArrowPlacement = ({ placement, theme }: Styles) => {
  switch (placement) {
    case 'top':
      return css`
        bottom: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'top-start':
      return css`
        bottom: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        left: ${tooltipArrowOffsetHorizontal}px;
      `;
    case 'top-end':
      return css`
        bottom: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        right: ${tooltipArrowOffsetHorizontal}px;
      `;
    case 'left':
      return css`
        right: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'left-end':
      return css`
        bottom: ${tooltipArrowOffsetVertical}px;
        right: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
      `;
      case 'left-start':
        return css`
        right: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        top: ${tooltipArrowOffsetVertical}px;
      `;
    case 'right':
      return css`
        left: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'right-start':
      return css`
        left: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        top: ${tooltipArrowOffsetVertical}px;
      `;
    case 'right-end':
      return css`
        bottom: ${tooltipArrowOffsetVertical}px;
        left: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
      `;
    case 'bottom':
      return css`
        left: 50%;
        top: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
        transform: translateX(-50%);
      `;
    case 'bottom-end':
      return css`
        right: ${tooltipArrowOffsetHorizontal}px;
        top: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
      `;
    case 'bottom-start':
      return css`
        left: ${tooltipArrowOffsetHorizontal}px;
        top: ${({ theme }) => -theme.tooltip.tooltipArrowWidth}px;
      `;
    default:
      return css`
        content: "NoProps";
      `;
  }
};

const tooltipPlacement = ({ placement, theme }: Styles) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return css`
        padding-bottom: ${({ theme }) => theme.tooltip.tooltipDistance}px;
        transform-origin: 50% 0;
      `;
    case 'left':
    case 'left-end':
    case 'left-start':
      return css`
        padding-right: ${({ theme }) => theme.tooltip.tooltipDistance}px;
        transform-origin: 100% 50%;
      `;
    case 'right':
    case 'right-start':
    case 'right-end':
      return css`
        padding-left: ${({ theme }) => theme.tooltip.tooltipDistance}px;
        transform-origin: 0 50%;
      `;
    case 'bottom':
    case 'bottom-end':
    case 'bottom-start':
      return css`
        padding-top: ${({ theme }) => theme.tooltip.tooltipDistance}px;
        transform-origin: 50% 100%;
      `;
    default:
      return css`
        padding-bottom: -0;
      `;
  }
};

const bgColorValue = ({ bgColor, theme }: Styles) => {
  return bgColor || theme.tooltip.tooltipBg;
};

const colorValue = ({ color, theme }: Styles) => {
  return color || theme.tooltip.tooltipColor;
};

export const StyledTooltip = styled.div`
  ${reset}
  ${(props: Styles) => tooltipPlacement(props)}
  display: block;
  max-width: ${({ theme }) => theme.tooltip.tooltipMaxWidth}px;
  visibility: visible;
  z-index: ${({ theme }) => theme.zIndex.zIndexTooltip};
`;

export const TooltipContainer = styled.div`
    animation-delay: 0s;
    animation-duration: 0.1s;
    animation-name: ${zoomBigIn};
    background-color: ${(props: Styles) => bgColorValue(props)};
    border-radius: ${({ theme }) => theme.border.borderRadiusBase}px;
    box-shadow: ${({ theme }) => theme.shadow.boxShadowBase};
    color: ${(props: Styles) => colorValue(props)};
    direction: ${(props) => props.rtl ? 'rtl' : 'ltr'};
    min-height: 32px;
    min-width: 30px;
    padding: 6px 8px;
    position: relative;
    text-align: left;
    text-decoration: none;
    word-wrap: break-word;
  `;

export const TooltipArrow = styled.div`
  background-color: transparent;
  direction: ${(props) => props.rtl ? 'rtl' : 'ltr'};
  display: block;
  height: ${({ theme }) => tooltipArrowRotateWidth(tooltipArrowShadowWidth, theme.tooltip.tooltipArrowWidth)}px;
  overflow: hidden;
  pointer-events: none;
  width: ${({ theme }) => tooltipArrowRotateWidth(tooltipArrowShadowWidth, theme.tooltip.tooltipArrowWidth)}px;
  ${(props: Styles) => tooltipArrowPlacement(props)}
`;

export const TooltipArrowContent = styled.div`
  background-color: ${(props: Styles) => bgColorValue(props)};
  content: "";
  display: block;
  height: ${({ theme }) => theme.tooltip.tooltipArrowWidth}px;
  margin: auto;
  pointer-events: auto;
  position: absolute;
  width: ${({ theme }) => theme.tooltip.tooltipArrowWidth}px;
  ${(props: Styles) => tooltipArrowContentPlacement(props)}
`;

export const StyledTooltipTrigger= styled.div`
  box-sizing: border-box;
  display: inline;
  height: auto;
  white-space: nowrap;
  width: auto;
`;
