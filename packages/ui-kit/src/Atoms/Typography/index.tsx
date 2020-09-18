import styled, { DefaultTheme, css } from 'styled-components';
import * as React from 'react';

const colorValue = ({ color, disabled, theme }: Styles) => {
  if(disabled) {
    return theme.font.textColorDisabled;
  }
  else if(color === "primary") {
    return theme.colors.primary;
  }
  else if(color === "secondary") {
    return theme.font.textColorSecondary;
  }
  else if(color === "success") {
    return theme.colors.success;
  }
  else if(color === "warning") {
    return theme.colors.warning;
  }
  else if(color === "error") {
    return theme.colors.error;
  }
  else if(color === "inverse") {
    return theme.font.textColorInverse;
  }
  else {
    return color || theme.font.textColor;
  }
};

const textStyles = ({ align, avoidSelect, color, fontStyle, weight, disabled, theme }: Styles) => {
  return css`
  color: ${(props: Styles) => colorValue(props)};
  cursor: ${props => props.disabled ? "not-allowed" : "auto"};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-style: ${({ fontStyle, theme }) => fontStyle ? fontStyle : theme.font.fontStyleBase};
  margin-top: ${({ theme }) => theme.typography.typographyTitleMarginTop};
  text-align: ${props => props.align ? props.align : "inherit"};
  text-decoration: ${({ textDecoration, theme }) => textDecoration ? textDecoration : theme.font.textDecorationBase};
  transition: color ${({ animationDuration, theme }) => animationDuration ? animationDuration : theme.animation.animationDurationBase} ease;
  user-select: ${props => props.avoidSelect ? "none" : "auto"};
`
};

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.heading1Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.23};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H1 = (props) => {
  return (
    <StyledH1 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH1>
  )
};

const StyledH2  = styled.h2`
  font-size: ${({ theme }) => theme.font.heading2Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.35};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H2 = (props) => {
  return (
    <StyledH2 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH2>
  )
};

const StyledH3 =  styled.h3`
  font-size: ${({ theme }) => theme.font.heading3Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.35};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H3 = (props) => {
  return (
    <StyledH3 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH3>
  )
};

const StyledH4 =  styled.h4`
  font-size: ${({ theme }) => theme.font.heading4Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.4};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H4 = (props) => {
  return (
    <StyledH4 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH4>
  )
};

const StyledH5 =  styled.h5`
  font-size: ${({ theme }) => theme.font.heading5Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.4};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H5 = (props) => {
  return (
    <StyledH5 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH5>
  )
};

const StyledH6 =  styled.h6`
  font-size: ${({ theme }) => theme.font.heading6Size}px;
  font-weight: ${({ fontWeight, theme }) => fontWeight ? fontWeight : theme.font.fontWeightBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.55};
  margin-bottom: ${({ theme }) => theme.typography.typographyTitleMarginBottom};
  ${(props: Styles) => textStyles(props)}
`

export const H6 = (props) => {
  return (
    <StyledH6 alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledH6>
  )
};

const StyledMark = styled.mark`
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.fontSizeBase}px;
  font-style: ${({ fontStyle, theme }) => fontStyle ? fontStyle : theme.font.fontStyleBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.5715};
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  text-align: ${props => props.align ? props.align : "inherit"};
  text-decoration: ${({ textDecoration, theme }) => textDecoration ? textDecoration : theme.font.textDecorationBase};
  user-select: ${props => props.avoidSelect ? "none" : "auto"};
`

export const Mark = (props) => {
  return (
    <StyledMark alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledMark>
  )
};

const StyledCode = styled.code`
  background-color: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 3px;
  color: ${(props: Styles) => colorValue(props)};
  font-family: ${({ theme }) => theme.font.codeFamily};
  font-size: ${({ theme }) => theme.font.fontSizeBase}px;
  font-style: ${({ fontStyle, theme }) => fontStyle ? fontStyle : theme.font.fontStyleBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.5715};
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  text-align: ${props => props.align ? props.align : "inherit"};
  text-decoration: ${({ textDecoration, theme }) => textDecoration ? textDecoration : theme.font.textDecorationBase};
  user-select: ${props => props.avoidSelect ? "none" : "auto"};
`
export const Code = (props) => {
  return (
    <StyledCode alt={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} {...props} >
      {props.children}
    </StyledCode>
  )
}

type PProps = {
  children: React.ReactNode,
  avoidSelect: boolean,
  color: string,
  fontStyle: string,
  weight: string | number,
  disabled: boolean,
  theme: DefaultTheme
}

const StyledP = styled.p<PProps>`
  font-size: ${({ theme }) => theme.font.fontSizeBase}px;
  font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
  margin-bottom: 1em;
  ${(props: Styles) => textStyles(props)}
`
export const P = (props: PProps) => {
  return (
    <StyledP title={props.title} aria-label={props.title} avoidSelect={props.avoidSelect} weight={props.fontWeight} {...props} >
      {props.children}
    </StyledP>
  )
}

type TextProps = {
  children: React.ReactNode,
  align?: 'center', 'inherit', 'justify', 'left', 'right',
  variation?: 'body1' | 'body2' | 'button' | 'caption' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2',
  element?: 'p' | 'span' | 'div' | 'li',
  avoidSelect: boolean,
  noWrap: boolean,
  color: string,
  fontStyle: string,
  weight: string | number,
  disabled: boolean,
  rtl: boolean,
  theme: DefaultTheme
}

const StyledTextStyles = ({ size, weight, variation, theme }: Styles) => {
  if(variation === "body1") {
    return css`
      font-size: ${({ theme }) => theme.font.body1Size}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.body1LetterSpacing};
      line-height: ${({ theme }) => theme.font.body1LineHeight};
    `
  }
  else if(variation === "body2") {
    return css`
      font-size: ${({ theme }) => theme.font.body2Size}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.body2LetterSpacing};
      line-height: ${({ theme }) => theme.font.body2LineHeight};
    `
  }
  else if(variation === "button") {
    return css`
      font-size: ${({ theme }) => theme.font.buttonSize}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.buttonLetterSpacing};
      line-height: ${({ theme }) => theme.font.buttonLineHeight};
      text-transform: uppercase;
    `
  }
  else if(variation === "caption") {
    return css`
      font-size: ${({ theme }) => theme.font.captionSize}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.captionLetterSpacing};
      line-height: ${({ theme }) => theme.font.captionLineHeight};
    `
  }
  else if(variation === "inherit") {
    return css`
      font-size: inherit;
      font-weight: inherit;
      letter-spacing: inherit;
      line-height: inherit;
      text-transform: inherit;
    `
  }
  else if(variation === "overline") {
    return css`
      font-size: ${({ theme }) => theme.font.overlineSize}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.overlineLetterSpacing};
      line-height: ${({ theme }) => theme.font.overlineLineHeight};
      text-transform: uppercase;
    `
  }
  else if(variation === "subtitle1") {
    return css`
      font-size: ${({ theme }) => theme.font.subtitle1Size}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.subtitle1LetterSpacing};
      line-height: ${({ theme }) => theme.font.subtitle1LineHeight};
    `
  }
  else if(variation === "subtitle2") {
    return css`
      font-size: ${({ theme }) => theme.font.subtitle2Size}px;
      font-weight: ${({ weight, theme }) => weight ? weight : theme.font.fontWeightBase};
      letter-spacing: ${({ theme }) => theme.font.subtitle2LetterSpacing};
      line-height: ${({ theme }) => theme.font.subtitle2LineHeight};
    `
  }
  else {
    return '';
  }
};

export const StyledText = styled.p<TextProps>`
  color: ${(props: Styles) => colorValue(props)};
  direction: ${props => props.rtl ? "rtl" : "ltr"};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.fontSizeBase}px;
  font-style: ${({ fontStyle, theme }) => fontStyle ? fontStyle : theme.font.fontStyleBase};
  line-height: ${({ lineHeight, theme }) => lineHeight ? lineHeight :  1.5715};
  margin: ${props => props.noMargin ? "0" : "0 0.2em"};
  padding: ${props => props.noPadding ? "0" : "0.2em 0.4em 0.1em"};
  text-align: ${props => props.align ? props.align : "inherit"};
  text-decoration: ${({ textDecoration, theme }) => textDecoration ? textDecoration : theme.font.textDecorationBase};
  user-select: ${props => props.avoidSelect ? "none" : "auto"};
  white-space: ${props => props.nowrap ? "nowrap" : "normal"};
  ${(props: Styles) => StyledTextStyles(props)}
`
export const Text = (props: TextProps) =>
    <StyledText as={props.element} element={props.element} {...props}>
        {props.children}
    </StyledText>

Text.defaultProps = {
  align: 'center',
  variation: 'body1',
  element: 'span',
  avoidSelect: false,
  noWrap: false,
  color: '',
  fontStyle: '',
  weight: '',
  disabled: false,
  rtl: false,
};
