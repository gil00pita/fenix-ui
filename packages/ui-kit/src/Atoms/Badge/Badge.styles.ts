import reset from '../GlobalStyles/Reset';
import { PresetColorType, PresetStatusColorType } from '@fenix-ui/utils/lib/colors';
import styled, { DefaultTheme } from 'styled-components';

interface Styles {
  overflowCount?: number;
  dot?: boolean;
  theme: DefaultTheme;
  direction?: string;
  prefixCls?: string;
  status?: PresetStatusColorType;
  color?: LiteralUnion<PresetColorType, string>;
  offset?: [number | string, number | string];
  children?: React.ReactNode;
}

const statusProcessing = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;


const zoomBadgeIn = keyframes`
  0% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(50%, -50%);
  }
`;

const zoomBadgeOut = keyframes`
   0% {
    transform: scale(1) translate(50%, -50%);
  }
  100% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
`;

const animationStatusProcessing = props => css`${antStatusProcessing}`;
const animationZoomBadgeIn = props => css`${zoomBadgeIn}`;
const animationZoomBadgeOut = props => css`${zoomBadgeOut}`;

const styleWithOffset = ({ direction, offset, theme }: Styles) => {
  if (direction === 'rtl') {
    return offset
      ? {
          left: parseInt(offset[0] as string, 10),
          marginTop: offset[1],
        }
      : '';
  }
  return offset
    ? {
        right: -parseInt(offset[0] as string, 10),
        marginTop: offset[1],
      }
    : '';
};

const StyledBadge= styled.span`
  ${reset}
  position: relative;
  display: inline-block;
  color: unset;
  line-height: 1;
  ${styleWithOffset}
`;

export const StyledBadgeScrollNumber = styled.span`
    z-index: ${({ theme }) => theme.zIndex.zIndexBadge};
    min-width: ${({ theme }) => theme.badge.badgeHeight};
    height: ${({ theme }) => theme.badge.badgeHeight};
    padding: 0 6px;
    color: ${({ theme }) => theme.badge.badgeTextColor};
    font-weight: ${({ theme }) => theme.badge.badgeFontWeight};
    font-size: ${({ theme }) => theme.badge.badgeFontSize};
    line-height: ${({ theme }) => theme.badge.badgeHeight};
    white-space: nowrap;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: ${({ theme }) => theme.badge.badgeHeight / 2};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.shadow.shadowColorInverse};
    & a,
    & a:hover {
      color: ${({ theme }) => theme.badge.badgeTextColor};
    }
`;

export const StyledBadgeText= styled.span`
 margin-left: 8px;
      color: @text-color;
      font-size: @font-size-base;
`;

const statusColor = ({ color, processing, theme }: Styles) => {
  if (processing) {
    return theme.colors.processing;
  } else {
    switch (color) {
      case 'default':
        return theme.colors.default;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      case 'success':
        return theme.colors.success;
      default:
        return color;
    };
  };
}
const setAfterProcessing = ({ processing, theme }: Styles) => {
  if (processing) {
    return `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid ${theme.colors.processing};
      border-radius: 50%;
      animation: ${animationStatusProcessing} 1.2s infinite ease-in-out;
      content: '';
    `
  }
};

export const StyledBadgeStatus= styled.span`
  line-height: inherit;
  vertical-align: baseline;
  position: relative;
  top: -1px;
  display: inline-block;
  width: ${({ theme }) => theme.badge.badgeStatusSize};
  height: ${({ theme }) => theme.badge.badgeStatusSize};
  vertical-align: middle;
  border-radius: 50%;
  background-color: ${(props: Styles) => statusColor(props)};
  &::after {${(props: Styles) => setAfterProcessing(props)}}
`;

export default StyledBadge;
