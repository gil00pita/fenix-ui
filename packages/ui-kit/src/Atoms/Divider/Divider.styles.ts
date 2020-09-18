/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme } from 'styled-components';
import reset from '../GlobalStyles/Reset';

interface Styles {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  dashed?: boolean;
  theme: DefaultTheme;
  className?: React.string;
  orientation?: React.string;
  plain?: boolean;
  withText?: boolean;
}

const variantType = ({ type, withText, theme }: Styles) => {
  switch (type) {
    case 'vertical':
      let vertical = `
      position: relative;
      top: -0.06em;
      display: inline-block;
      height: 0.9em;
      margin: 0 8px;
      vertical-align: middle;
      border-top: 0;
      border-left: 1px solid ${theme.border.borderColorSplit};
      `
      if (withText) {
        vertival += `
        display: flex;
        margin: 16px 0;
        color: ${theme.border.borderColorSplit}@heading-color;
        font-weight: 500;
        font-size: ${theme.border.borderColorSplit}@font-size-lg;
        white-space: nowrap;
        text-align: center;
        border-top: 0;
        &::before,
        &::after {
          position: relative;
          top: 50%;
          width: 50%;
          border-top: 1px solid ${theme.border.borderColorSplit}@border-color-split;
          transform: translateY(50%);
          content: '';
        }
        `
      }

      return vertical;
    case 'horizontal':
      return `
      display: flex;
      clear: both;
      width: 100 %;
      min-width: 100%; // Fix https://github.com/ant-design/ant-design/issues/10914
      margin: 24px 0;
      `
  }
};

const dashedValue = ({ withText, dashed, theme }: Styles) => {
  return `
    background: none;
    border-color: ${theme.border.borderColorSplit};
    border-style: dashed;
    border-width: 1px 0 0;
    ${withText && dashed ? 'border-top: 0' : ''};
    &::before,
    &::after {
      ${withText && dashed ? 'border-style: dashed none none' : ''};
    }
  `;
};

const withTextValue = ({ blur, theme }: Styles) => {
  return `
    color: ${theme.font.textColor};
    font-weight: normal;
    font-size: ${theme.font.fontSizeBase};
    `;
};

const StyledDivider = styled.div`
  ${reset}
  border-top: 1px solid ${({ theme }) => theme.border.borderColorSplit};
  ${(props: Styles) => variantType(props)};
`;

export const StyledDividerSpan = styled.div`
  display: inline-block;
  padding: 0 ${({ theme }) => theme.divider.dividerTextPadding};
`;

export default StyledDivider;
