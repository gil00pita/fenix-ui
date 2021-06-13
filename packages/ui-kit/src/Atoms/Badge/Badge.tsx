import * as React from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';
import ScrollNumber from './ScrollNumber';
import Ribbon from './Ribbon';
import { PresetColorType, PresetStatusColorType } from '@fenix-ui/utils/lib/colors';
import { ConfigContext } from '../Providers/ConfigProvider';
import { LiteralUnion } from '@fenix-ui/utils/lib/type';
import { cloneElement } from '@fenix-ui/utils/lib/reactNode';
import { isPresetColor } from './utils';
import StyledBadge,{ StyledBadgeText, StyledBadgeStatus } from './Badge.styles';
export { ScrollNumberProps } from './ScrollNumber';

interface CompoundedComponent extends React.FC<BadgeProps> {
  Ribbon: typeof Ribbon;
}

export interface BadgeProps {
  /** Number to show in badge */
  count?: React.ReactNode;
  showZero?: boolean;
  /** Max count to show */
  overflowCount?: number;
  /** whether to show red dot without number */
  dot?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
  scrollNumberPrefixCls?: string;
  className?: string;
  status?: PresetStatusColorType;
  color?: LiteralUnion<PresetColorType, string>;
  text?: React.ReactNode;
  offset?: [number | string, number | string];
  title?: string;
}

const Badge: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
  children,
  status,
  text,
  color,
  count = null,
  overflowCount = 99,
  dot = false,
  title,
  offset,
  style,
  className,
  showZero = false,
  ...restProps
}) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('badge', customizePrefixCls);

  const getNumberedDisplayCount = () => {
    const displayCount =
      (count as number) > (overflowCount as number) ? `${overflowCount}+` : count;
    return displayCount as string | number | null;
  };

  const hasStatus = (): boolean => {
    return !!status || !!color;
  };

  const isZero = () => {
    const numberedDisplayCount = getNumberedDisplayCount();
    return numberedDisplayCount === '0' || numberedDisplayCount === 0;
  };

  const isDot = () => {
    return (dot && !isZero()) || hasStatus();
  };

  const getDisplayCount = () => {
    // dot mode don't need count
    if (isDot()) {
      return '';
    }
    return getNumberedDisplayCount();
  };

  const getScrollNumberTitle = () => {
    if (title) {
      return title;
    }
    return typeof count === 'string' || typeof count === 'number' ? count : undefined;
  };

  const getStyleWithOffset = () => {
    if (direction === 'rtl') {
      return offset
        ? {
            left: parseInt(offset[0] as string, 10),
            marginTop: offset[1],
            ...style,
          }
        : style;
    }
    return offset
      ? {
          right: -parseInt(offset[0] as string, 10),
          marginTop: offset[1],
          ...style,
        }
      : style;
  };

  const isHidden = () => {
    const displayCount = getDisplayCount();
    const isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
    return (isEmpty || (isZero() && !showZero)) && !isDot();
  };

  const renderStatusText = () => {
    const hidden = isHidden();
    return hidden || !text ? null : <span className={`${prefixCls}-status-text`}>{text}</span>;
  };

  const renderDisplayComponent = () => {
    const customNode = count as React.ReactElement<any>;
    if (!customNode || typeof customNode !== 'object') {
      return undefined;
    }
    return cloneElement(customNode, {
      style: {
        ...getStyleWithOffset(),
        ...(customNode.props && customNode.props.style),
      },
    });
  };

  const renderBadgeNumber = () => {
    const scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    const displayCount = getDisplayCount();
    const bDot = isDot();
    const hidden = isHidden();

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: bDot,
      [`${prefixCls}-count`]: !bDot,
      [`${prefixCls}-multiple-words`]:
        !bDot && count && count.toString && count.toString().length > 1,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-status-${color}`]: isPresetColor(color),
    });

    let statusStyle: React.CSSProperties | undefined = getStyleWithOffset();
    if (color && !isPresetColor(color)) {
      statusStyle = statusStyle || {};
      statusStyle.background = color;
    }

    return hidden ? null : (
      <ScrollNumber
        prefixCls={scrollNumberPrefixCls}
        data-show={!hidden}
        className={scrollNumberCls}
        count={displayCount}
        displayComponent={renderDisplayComponent()} // <Badge status="success" count={<Icon type="xxx" />}></Badge>
        title={getScrollNumberTitle()}
        style={statusStyle}
        key="scrollNumber"
      />
    );
  };

  // <Badge status="success" />
  if (!children && hasStatus()) {
    const styleWithOffset = getStyleWithOffset();
    const statusTextColor = styleWithOffset && styleWithOffset.color;
    return (
       <StyledBadge {...restProps} style={styleWithOffset} offset={offset} rtl={direction}>
        <StyledBadgeStatus color={isPresetColor(color)} status={!!status} dot={hasStatus()}/>
        <StyledBadgeText color={statusTextColor} rtl={direction}>
          {text}
        </StyledBadgeText>
      </StyledBadge>
    );
  }

  return (
    <StyledBadge {...restProps}>
      {children}
      <Animate
        component=""
        showProp="data-show"
        transitionName={children ? `${prefixCls}-zoom` : ''}
        transitionAppear
      >
        {renderBadgeNumber()}
      </Animate>
      {renderStatusText()}
    </StyledBadge>
  );
};

Badge.Ribbon = Ribbon;

export default Badge;