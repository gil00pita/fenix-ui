import { StyledText } from './../../Atoms/Typography';
import { lighten, darken, fade } from '@fenix-ui/utils/lib/colorManipulator';
/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme, css } from 'styled-components';

// TODO Add Loading
// TODO Add Icon
// TODO Add block
// TODO Add rtl
// TODO Add % of darkenss on hover

interface Styles {
  theme: DefaultTheme,
  color?: string,
  borderRadius?: number | string,
  borderWidth?: number | string,
  type?: 'default'| 'raised'| 'ghost'| 'dashed',
  size?: 'small' | 'medium' | 'large';
  loading?: boolean,
  block?: boolean,
  disabled?: boolean
}

interface SizeStyles {
  theme: DefaultTheme,
  borderRadius?: number | string,
  type?: 'default'| 'raised'| 'ghost'| 'dashed',
  size?: 'small' | 'medium' | 'large';
}

const isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

const buttonSize = ({theme, size, borderRadius}: SizeStyles) => {
  const borderRadiusCSS = isNumber(borderRadius) ? borderRadius + 'px' : borderRadius;

  switch (size) {
    case 'small':
      return css`
        border-radius: ${({ theme }) => borderRadiusCSS ? borderRadiusCSS : theme.button.btnBorderRadiusSm + 'px'};
        font-size: ${({ theme }) => theme.button.btnFontSizeSm + 'px'};
        height: ${({ theme }) => theme.button.btnHeightSm + 'px'};
        padding: ${({ theme }) => theme.button.btnPaddingVerticalSm + 'px'} ${({ theme }) => theme.button.btnPaddingHorizontalSm + 'px'};

        & > ${StyledText} {
          font-size: inherit;
        }
      `;

    case 'medium':
      return css`
        border-radius: ${({ theme }) => borderRadiusCSS ? borderRadiusCSS : theme.button.btnBorderRadiusBase + 'px'};
        font-size: ${({ theme }) => theme.button.btnFontSizeBase + 'px'};
        height: ${({ theme }) => theme.button.btnHeightBase + 'px'};
        padding: ${({ theme }) => theme.button.btnPaddingVerticalMd + 'px'} ${({ theme }) => theme.button.btnPaddingHorizontalBase + 'px'};

        & > ${StyledText} {
          font-size: inherit;
        }
      `;
  case 'large':
    return css`
      border-radius: ${({ theme }) => borderRadiusCSS ? borderRadiusCSS : theme.button.btnBorderRadiusLg + 'px'};
      font-size: ${({ theme }) => theme.button.btnFontSizeLg + 'px'};
      height: ${({ theme }) => theme.button.btnHeightLg + 'px'};
      padding: ${({ theme }) => theme.button.btnPaddingVerticalLg + 'px'} ${({ theme }) => theme.button.btnPaddingHorizontalLg + 'px'};

      & > ${StyledText} {
        font-size: inherit;
      }
    `;
  default:
    return '';
  }
}
const colorType = (theme, color) => {
  switch (color) {
    case 'default':
      return 'theme.font.textColor';
    case 'primary':
      return theme.colors.primary;
    case 'info':
      return theme.colors.info;
    case 'success':
      return theme.colors.success;
    case 'processing':
      return theme.colors.processing;
    case 'error':
      return theme.colors.error;
    case 'highlight':
      return theme.colors.highlight;
    case 'warning':
      return theme.colors.warning;
    case 'white':
      return theme.colors.white;
    case 'black':
      return theme.colors.black;
    case 'disabled':
      return theme.colors.disabled;
    default:
      return color;
  }
};

interface ColorStyles {
  theme: DefaultTheme,
  color?: string,
  textColor?: string,
  borderRadius?: number | string,
  borderWidth?: number | string,
  type?: 'default'| 'raised'| 'ghost'| 'dashed',
  size?: 'small' | 'medium' | 'large';
  loading?: boolean,
  block?: boolean,
  disabled?: boolean
}
const colors = ({
  color,
  textColor,
  borderRadius,
  borderWidth,
  variation,
  size,
  loading,
  disabled,
  theme
  }: ColorStyles) => {

    const hexColor = colorType(theme, color);
    const hexTextColor = colorType(theme, textColor);
    const hexColorHover = hexColor && darken(hexColor, 0.24);
    const hexColorActive = hexColor && lighten(hexColor, 0.24);
    const borderWidthCSS = isNumber(borderWidth) ? borderWidth + 'px' : borderWidth;

  switch (variation) {
    case 'default':
      const defaultBtnBg = disabled ? 'transparent' : theme.button.btnDefaultBg;
      const defaultBtnBorderColor = disabled ? theme.button.btnDisableColor : color ? hexColor : theme.button.btnDefaultBorder;
      const defaultBtnTextColor = disabled ? theme.button.btnDisableColor : loading ? theme.button.btnDefaultActive : color ? hexColor : theme.button.textColor;
      const defaultBtnColorTextHover = disabled ? theme.button.btnDisableColor : color ? hexColorHover : theme.button.btnDefaultHover;
      const defaultBtnColorTextActive = disabled ? theme.button.btnDisableColor : color ? hexColorActive : theme.button.btnDefaultHover;
      const defaultBtnBorderWidth = borderWidthCSS ? borderWidthCSS : theme.button.btnBorderWidth + 'px';
      const defaultBtnBorderStyle = theme.button.btnBorderStyle;

      return css`
        background-color: ${defaultBtnBg};
        background-image: none;
        border: ${defaultBtnBorderWidth} ${defaultBtnBorderStyle} ${defaultBtnBorderColor};
        box-shadow: ${({ theme }) => theme.button.btnShadow};
        color: ${defaultBtnTextColor};
        line-height: ${({ theme }) => theme.font.lineHeightBase};
        outline: 0;
        position: relative;
        touch-action: manipulation;
        user-select: none;
        white-space: nowrap;

        & > ${StyledText} {
          color: inherit;
          line-height: inherit;
          text-shadow: inherit;
          user-select: none;
          white-space: nowrap;
        }

        :active,
        :focus,
        :focus > ${StyledText},
        :active > ${StyledText} {
          outline: 0;
        }

        :hover,
        :focus,
        :active,
        :hover > ${StyledText},
        :focus > ${StyledText},
        :active > ${StyledText} {
          background-color: transparent;
          text-decoration: none;
        }

        :active,
        :active > ${StyledText} {
          background-color: transparent;
          border-color: ${defaultBtnColorTextActive};
          color: ${defaultBtnColorTextActive};
        }

        :hover,
        :focus,
        :hover > ${StyledText},
        :focus > ${StyledText} {
          background-color: transparent;
          border-color: ${defaultBtnColorTextHover};
          color: ${defaultBtnColorTextHover};
        }

        :not([disabled]):active {
          box-shadow: none;
          outline: 0;
        }

        :not([disabled]):hover {
          text-decoration: none;
        }
      `;

    case 'raised':
      const raisedBtnBorderColor = disabled ? 'transparent' : color ? hexColor : theme.button.btnDefaultBorder;
      const raisedBtnColor = disabled ? theme.button.btnDisableColor : textColor ? hexTextColor : theme.button.btnRaisedColor;
      const raisedBtnBg = disabled ? theme.button.btnRaisedBgDisabled : color ? hexColor : theme.button.btnRaisedBg;
      const raisedBtnBgHover = disabled ? theme.button.btnDisableColor : color ? hexColorHover : theme.button.btnRaisedBgHover;
      const raisedBtnBgActive = disabled ? theme.button.btnDisableColor : color ? hexColorActive : theme.button.btnRaisedBgActive;

      return css`
        background-color: ${raisedBtnBg};
        border: ${({ theme }) => borderWidthCSS ? borderWidthCSS : theme.button.btnBorderWidth + 'px'} ${({ theme }) => theme.button.btnBorderStyle} ${raisedBtnBorderColor};
        box-shadow: ${({ theme }) => theme.button.btnShadow};
        color: ${raisedBtnColor};

        :active {
          background-color: ${({ disabled, theme }) => disabled ? theme.button.btnDisableColor : theme.button.btnRaisedBgActive};
          border-color: ${raisedBtnBgActive};
          color: ${raisedBtnColor};
        }

        :hover,
        :focus {
          color: ${raisedBtnColor};
          background-color: ${raisedBtnBgHover};
          border-color: ${raisedBtnBorderColor};
        }

        :active,
        :focus {
          outline: 0;
        }

        [disabled],
        [disabled]:active,
        [disabled]:focus,
        [disabled]:hover {
          background-color: ${({ theme }) => theme.button.btnRaisedBgDisabled};
          border-color: ${({ theme }) => theme.button.btnRaisedBgDisabled};
          color: ${({ theme }) => theme.button.btnDisableColor};
          text-shadow: none;
        }

        & > ${StyledText} {
          color: inherit;
          line-height: inherit;
          text-shadow: inherit;
        }
      `;
    case 'ghost':
      const ghostBtnBorderColor = disabled ? 'transparent' : theme.button.btnDefaultGhostBorder;
      const ghostBtnColor = disabled ? theme.button.btnDisableColor : color ? hexColor : theme.button.btnDefaultGhostColor;
      const ghostBtnBg = disabled ? 'transparent' : theme.button.btnDefaultGhostBg;
      const ghostBtnBgHover = disabled ? 'transparent' : color ? fade(hexColorHover, 0.2) : theme.button.btnDefaultGhostBgHover;
      const ghostBtnBgActive = disabled ? theme.button.btnDisableColor : color ? fade(hexColorActive, 0.16) : theme.button.btnDefaultGhostBgActive;
      const ghostBtnBorderWidth = borderWidthCSS ? borderWidthCSS : theme.button.btnBorderWidth + 'px';
      const ghostBtnBorderStyle = theme.button.btnBorderStyle;

      return css`
        color: ${ghostBtnColor};
        background-color: ${ghostBtnBg};
        border: ${ghostBtnBorderWidth} ${ghostBtnBorderStyle} ${ghostBtnBorderColor};
        box-shadow: none;

        :active {
          color: ${ghostBtnColor};
          background-color: ${({ disabled, theme }) => disabled ? theme.button.btnDisableColor : theme.button.btnRaisedBgActive};
          border-color: ${ghostBtnBgActive};
        }

        :hover,
        :focus {
          color: ${ghostBtnColor};
          background-color: ${ghostBtnBgHover};
          border-color: ${ghostBtnBorderColor};
        }

        :active,
        :focus {
          outline: 0;
        }

        [disabled],
        [disabled]:active,
        [disabled]:focus,
        [disabled]:hover {
          color: ${({ theme }) => theme.button.btnDisableColor};
          background-color: ${({ theme }) => theme.button.btnRaisedBgDisabled};
          border-color: ${({ theme }) => theme.button.btnRaisedBgDisabled};
          text-shadow: none;
        }

        & > ${StyledText} {
          color: inherit;
          line-height: inherit;
          text-shadow: inherit;
        }
      `;
    case 'dashed':
      const dashedBtnBg = disabled ? 'transparent' : theme.button.btnDefaultBg;
      const dashedBtnBorderColor = disabled ? theme.button.btnDisableColor : color ? hexColor : theme.button.btnDefaultBorder;
      const dashedBtnColor = disabled ? theme.button.btnDisableColor : color ? hexColor : theme.button.textColor;
      const dashedBtnColorHover = disabled ? theme.button.btnDisableColor : color ? hexColorHover : theme.button.btnDefaultHover;
      const dashedBtnColorActive = disabled ? theme.button.btnDisableColor : color ? hexColorActive : theme.button.btnDefaultHover;
      const dashedBtnBorderWidth = borderWidthCSS ? borderWidthCSS : theme.button.btnBorderWidth + 'px';
      const dashedBtnBorderStyle = theme.button.btnDashedBgBorderStyle;

      return css`
        background-color: ${dashedBtnBg};
        background-image: none;
        border: ${dashedBtnBorderWidth} ${dashedBtnBorderStyle} ${dashedBtnBorderColor};
        box-shadow: ${({ theme }) => theme.button.btnShadow};
        color: ${dashedBtnColor};
        line-height: ${({ theme }) => theme.font.lineHeightBase};
        outline: 0;
        position: relative;
        touch-action: manipulation;
        user-select: none;
        white-space: nowrap;

        & > ${StyledText} {
          color: inherit;
          line-height: inherit;
          text-shadow: inherit;
          user-select: none;
          white-space: nowrap;
        }

        :active,
        :focus,
        :focus > ${StyledText},
        :active > ${StyledText} {
          outline: 0;
        }

        :hover,
        :focus,
        :active,
        :hover > ${StyledText},
        :focus > ${StyledText},
        :active > ${StyledText} {
          background-color: transparent;
          text-decoration: none;
        }

        :active,
        :active > ${StyledText} {
          background-color: transparent;
          border-color: ${({ disabled, theme }) => disabled ? theme.button.btnDisableColor : hexColorActive};
          color: ${dashedBtnColorActive};
        }

        :hover,
        :focus,
        :hover > ${StyledText},
        :focus > ${StyledText} {
          background-color: transparent;
          border-color: ${dashedBtnColorHover};
          color: ${dashedBtnColorHover};
        }

        :not([disabled]):active {
          box-shadow: none;
          outline: 0;
        }

        :not([disabled]):hover {
          text-decoration: none;
        }
      `;
    default:
      return '';
  };
};

export const LoadingIconStyled = styled.span`
  margin-right: 8px;
`;

export const StyledButton = styled.button`
  ${(props: Styles) => colors(props)}
  ${(props: Styles) => buttonSize(props)}
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.button.btnFontWeight};
  line-height: ${({ theme }) => theme.font.lineHeightBase};
  overflow: visible;
  position: relative;
  text-shadow: ${({ disabled, color, theme }) => disabled ? 'none' : color ? `0 -1px 0 ${fade(colorType(theme, color), 0.1)}` : theme.button.btnTextShadow};
  text-transform: none;
  transition: all ${({ theme }) => theme.animation.animationDurationBase} ${({ theme }) => theme.animation.easeInOut};

  > ${StyledText} {
    font-weight: inherit;
    text-shadow: inherit;
    transition: color ${({ theme }) => theme.animation.animationDurationBase} ${({ theme }) => theme.animation.easeInOut};
  }

  :before {
    background: #141414;
    border-radius: inherit;
    bottom: -1px;
    content: "";
    display: none;
    left: -1px;
    opacity: 0.35;
    pointer-events: none;
    position: absolute;
    right: -1px;
    top: -1px;
    transition: opacity 0.2s;
    z-index: 1;
  }
`;

