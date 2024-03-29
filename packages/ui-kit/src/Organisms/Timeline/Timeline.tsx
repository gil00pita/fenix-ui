import * as React from 'react';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

import TimelineItem, { TimeLineItemProps } from './TimelineItem';
import { ConfigContext } from '../../Atoms/Providers/ConfigProvider';
import { cloneElement } from '@fenix-ui/utils/lib/reactNode';

export interface TimelineProps {
  prefixCls?: string;
  className?: string;
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending?: React.ReactNode;
  pendingDot?: React.ReactNode;
  style?: React.CSSProperties;
  reverse?: boolean;
  mode?: 'left' | 'alternate' | 'right';
}

interface TimelineType extends React.FC<TimelineProps> {
  Item: React.FC<TimeLineItemProps>;
}

const Timeline: TimelineType = props => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    pending = null,
    pendingDot,
    children,
    className,
    reverse,
    mode,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('timeline', customizePrefixCls);
  const pendingNode = typeof pending === 'boolean' ? null : pending;

  const pendingItem = pending ? (
    <TimelineItem pending={!!pending} dot={pendingDot || <LoadingOutlined />}>
      {pendingNode}
    </TimelineItem>
  ) : null;

  const timeLineItems = reverse
    ? [pendingItem, ...React.Children.toArray(children).reverse()]
    : [...React.Children.toArray(children), pendingItem];

  const getPositionCls = (ele: React.ReactElement<any>, idx: number) => {
    if (mode === 'alternate') {
      if (ele.props.position === 'right') return `${prefixCls}-item-right`;
      if (ele.props.position === 'left') return `${prefixCls}-item-left`;
      return idx % 2 === 0 ? `${prefixCls}-item-left` : `${prefixCls}-item-right`;
    }
    if (mode === 'left') return `${prefixCls}-item-left`;
    if (mode === 'right') return `${prefixCls}-item-right`;
    if (ele.props.position === 'right') return `${prefixCls}-item-right`;
    return '';
  };

  // Remove falsy items
  const truthyItems = timeLineItems.filter(item => !!item);
  const itemsCount = React.Children.count(truthyItems);
  const lastCls = `${prefixCls}-item-last`;
  const items = React.Children.map(truthyItems, (ele: React.ReactElement<any>, idx) => {
    const pendingClass = idx === itemsCount - 2 ? lastCls : '';
    const readyClass = idx === itemsCount - 1 ? lastCls : '';
    return cloneElement(ele, {
      className: classNames([
        ele.props.className,
        !reverse && !!pending ? pendingClass : readyClass,
        getPositionCls(ele, idx),
      ]),
    });
  });

  const hasLabelItem = timeLineItems.some((item: React.ReactElement<any>) => !!item?.props?.label);

  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-pending`]: !!pending,
      [`${prefixCls}-reverse`]: !!reverse,
      [`${prefixCls}-${mode}`]: !!mode && !hasLabelItem,
      [`${prefixCls}-label`]: hasLabelItem,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className,
  );

  return (
    <ul {...restProps} className={classString}>
      {items}
    </ul>
  );
};

Timeline.Item = TimelineItem;

Timeline.defaultProps = {
  reverse: false,
  mode: '' as TimelineProps['mode'],
};

export default Timeline;
