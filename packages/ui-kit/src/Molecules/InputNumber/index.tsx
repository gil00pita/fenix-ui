import * as React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import UpOutlined from '@ant-design/icons/UpOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';

import { ConfigConsumer, ConfigConsumerProps } from '../../Atoms/Providers/ConfigProvider';
import { Omit } from '@fenix-ui/utils/lib/type';
import SizeContext, { SizeType } from '../../Atoms/Providers/ConfigProvider/SizeContext';

// omitting this attrs because they conflicts with the ones defined in InputNumberProps
export type OmitAttrs = 'defaultValue' | 'onChange' | 'size';

export interface InputNumberProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitAttrs> {
  prefixCls?: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number | string;
  defaultValue?: number;
  tabIndex?: number;
  onChange?: (value: number | string | undefined) => void;
  disabled?: boolean;
  size?: SizeType;
  formatter?: (value: number | string | undefined) => string;
  parser?: (displayValue: string | undefined) => number | string;
  decimalSeparator?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  name?: string;
  id?: string;
  precision?: number;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

const InputNumber = React.forwardRef<unknown, InputNumberProps>((props, ref) => {
  const renderInputNumber = ({ getPrefixCls, direction }: ConfigConsumerProps) => {
    const { className, size: customizeSize, prefixCls: customizePrefixCls, ...others } = props;
    const prefixCls = getPrefixCls('input-number', customizePrefixCls);
    const upIcon = <UpOutlined className={`${prefixCls}-handler-up-inner`} />;
    const downIcon = <DownOutlined className={`${prefixCls}-handler-down-inner`} />;

    return (
      <SizeContext.Consumer>
        {size => {
          const mergeSize = customizeSize || size;
          const inputNumberClass = classNames(
            {
              [`${prefixCls}-lg`]: mergeSize === 'large',
              [`${prefixCls}-sm`]: mergeSize === 'small',
              [`${prefixCls}-rtl`]: direction === 'rtl',
            },
            className,
          );

          return (
            <RcInputNumber
              ref={ref}
              className={inputNumberClass}
              upHandler={upIcon}
              downHandler={downIcon}
              prefixCls={prefixCls}
              {...others}
            />
          );
        }}
      </SizeContext.Consumer>
    );
  };

  return <ConfigConsumer>{renderInputNumber}</ConfigConsumer>;
});

InputNumber.defaultProps = {
  step: 1,
};

export default InputNumber;
