import * as React from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import { ConfigContext } from '../../config-provider';
import Avatar from './Avatar';
import Popover from '../../popover';
import StyledAvatarGroup from './AvatarGroup.styles';

export interface GroupProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  maxCount?: number;
  maxStyle?: React.CSSProperties;
  maxPopoverPlacement?: 'top' | 'bottom';
}

const Group: React.FC<GroupProps> = props => {
  const { direction } = React.useContext(ConfigContext);
  const { className = '', maxCount, maxStyle } = props;

  const { children, maxPopoverPlacement = 'top' } = props;
  const childrenWithProps = toArray(children);
  const numOfChildren = childrenWithProps.length;
  if (maxCount && maxCount < numOfChildren) {
    const childrenShow = childrenWithProps.slice(0, maxCount);
    const childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
    childrenShow.push(
      <Popover
        content={childrenHidden}
        trigger="hover"
        placement={maxPopoverPlacement}
        overlayClassName={`${prefixCls}-popover`}
      >
        <Avatar style={maxStyle}>{`+${numOfChildren - maxCount}`}</Avatar>
      </Popover>,
    );
    return (
      <StyledAvatarGroup className={className} style={props.style} direction={direction}>
        {childrenShow}
      </StyledAvatarGroup>
    );
  }
  return (
    <StyledAvatarGroup className={className} style={props.style}>
      {children}
    </StyledAvatarGroup>
  );
};

export default Group;