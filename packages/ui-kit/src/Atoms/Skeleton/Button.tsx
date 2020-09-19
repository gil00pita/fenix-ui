import * as React from './node_modules/react';
import omit from './node_modules/omit.js.js';
import classNames from './node_modules/classnames';
import Element, { SkeletonElementProps } from './Element';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
  size?: 'large' | 'small' | 'default';
}

const SkeletonButton = (props: SkeletonButtonProps) => {
  const renderSkeletonButton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { prefixCls: customizePrefixCls, className, active } = props;
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const otherProps = omit(props, ['prefixCls']);
    const cls = classNames(prefixCls, className, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
    });
    return (
      <div className={cls}>
        <Element prefixCls={`${prefixCls}-button`} {...otherProps} />
      </div>
    );
  };
  return <ConfigConsumer>{renderSkeletonButton}</ConfigConsumer>;
};

SkeletonButton.defaultProps = {
  size: 'default',
};

export default SkeletonButton;
