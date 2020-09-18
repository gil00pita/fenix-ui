/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme } from 'styled-components';
import reset from '../GlobalStyles/Reset';

interface Styles {
  size?: string;
  blur?: number;
  shape?: string;
  theme: DefaultTheme;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  children?: React.ReactNode;
}

const borderRadius= ({ shape, borderRadius, theme }: Styles) => {
  let finalShape = theme.avatar.avatarBorderRadius;
  switch (shape) {
    case 'square':
      finalShape = `${borderRadius}px` || `${theme.avatar.avatarBorderRadius}px`;
      break;
    case 'circle':
      finalShape = '50%';
      break;
  }
  return finalShape;
};

const variantSize = ({ size, theme }: Styles) => {
  let finalSize;
  switch (size) {
    case 'small':
      finalSize = theme.avatar.avatarSizeBase;
      break;
    case 'large':
      finalSize = theme.avatar.avatarSizeLg;
      break;
  }
  return finalSize;
};

const borderWidthValue = ({ borderWidth, theme }: Styles) => {
  console.log(borderWidth)
  return `${borderWidth}px` || `${theme.avatar.avatarBorderWidth}px`;
};

const borderRadiusValue = ({ borderColor, theme }: Styles) => {
  return borderColor || theme.avatar.avatarBorderColor;
};

const bgColorValue = ({ bgColor, theme }: Styles) => {
  return bgColor || theme.avatar.avatarBg;
};

const blurValue = ({ blur, theme }: Styles) => {
  return blur + 'px' || 0;
};

export const StyledAvatarStringContainer = styled.div`
  left: 50%;
  position: absolute;
  transform-origin: 0 center;
`;

export const StyledAvatarIconContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.font.fontSize};
  height: 100%;
  justify-content: center;
`;

export const StyledAvatarImageContainer = styled.div`
  background: transparent;
`;

export const StyledAvatarImage = styled.img`
  display: block;
  filter: blur(${(props: Styles) => blurValue(props)});
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const StyledAvatar = styled.div`
  ${reset}
  align-items: center;
  background-color: ${(props: Styles) => bgColorValue(props)};
  border: ${(props: Styles) => borderWidthValue(props)} solid ${(props: Styles) => borderRadiusValue(props)};
  border-radius: ${(props: Styles) => borderRadius(props)};
  color: ${({ theme }) => theme.avatar.avatarColor};
  display: flex;
  height: ${(props: Styles) => variantSize(props)};
  justify-content: center;
  line-height: ${(props: Styles) => variantSize(props)};
  overflow: hidden;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: ${(props: Styles) => variantSize(props)};
`;

export default StyledAvatar;
