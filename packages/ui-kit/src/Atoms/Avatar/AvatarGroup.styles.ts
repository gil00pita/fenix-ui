/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

const StyledAvatarGroup = styled.div`
  display: inline-flex;

  > div {
    margin-left: -15px;

    :first-child {
      margin: 0;
    }
  }
`;

export default StyledAvatarGroup;
