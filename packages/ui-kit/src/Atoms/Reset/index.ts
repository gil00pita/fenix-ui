

import { css } from 'styled-components';

const reset = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.font.textColor};
  font-size: ${({ theme }) => theme.font.fontSizeBase}px;
  font-variant: ${({ theme }) => theme.font.fontVariantBase};
  line-height: ${({ theme }) => theme.font.lineHeightBase};
  list-style: none;
  font-feature-settings: "${({ theme }) => theme.font.fontFeatureSettingsBase}";
`;

export default reset;
