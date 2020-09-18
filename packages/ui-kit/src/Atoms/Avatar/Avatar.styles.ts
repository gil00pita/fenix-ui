/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme } from 'styled-components';
import reset from '../Reset';

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

const variantSize= ({ size, theme }: Styles) => {
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
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
`;

export const StyledAvatarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.fontSize};
  height: 100%;
`;

export const StyledAvatarImageContainer = styled.div`
  background: transparent;
`;

export const StyledAvatarImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(${(props: Styles) => blurValue(props)});
`;

const StyledAvatar = styled.div`
  ${reset}
  border: ${(props: Styles) => borderWidthValue(props)} solid ${(props: Styles) => borderRadiusValue(props)};
  border-radius: ${(props: Styles) => borderRadius(props)};
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: ${({ theme }) => theme.avatar.avatarColor};
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props: Styles) => bgColorValue(props)};
  width: ${(props: Styles) => variantSize(props)};
  height: ${(props: Styles) => variantSize(props)};
  line-height: ${(props: Styles) => variantSize(props)};
`;

export default StyledAvatar;
