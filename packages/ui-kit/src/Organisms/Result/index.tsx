import * as React from 'react';
import classNames from 'classnames';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import WarningFilled from '@ant-design/icons/WarningFilled';

import { ConfigConsumerProps, ConfigConsumer } from '../../Atoms/Providers/ConfigProvider';
import devWarning from '@fenix-ui/utils/lib/devWarning';

import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';

export const IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled,
};

export const ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized,
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

export interface ResultProps {
  icon?: React.ReactNode;
  status?: ResultStatusType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

// ExceptionImageMap keys
const ExceptionStatus = Object.keys(ExceptionMap);

/**
 * render icon
 * if ExceptionStatus includes ,render svg image
 * else render iconNode
 * @param prefixCls
 * @param {status, icon}
 */
const renderIcon = (prefixCls: string, { status, icon }: ResultProps) => {
  const className = classNames(`${prefixCls}-icon`);

  devWarning(
    !(typeof icon === 'string' && icon.length > 2),
    'Result',
    `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
  );

  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status as ExceptionStatusType];
    return (
      <div className={`${className} ${prefixCls}-image`}>
        <SVGComponent />
      </div>
    );
  }

  const iconNode = React.createElement(
    IconMap[status as Exclude<ResultStatusType, ExceptionStatusType>],
  );

  return <div className={className}>{icon || iconNode}</div>;
};

const renderExtra = (prefixCls: string, { extra }: ResultProps) =>
  extra && <div className={`${prefixCls}-extra`}>{extra}</div>;

export interface ResultType extends React.FC<ResultProps> {
  PRESENTED_IMAGE_404: React.ReactNode;
  PRESENTED_IMAGE_403: React.ReactNode;
  PRESENTED_IMAGE_500: React.ReactNode;
}

const Result: ResultType = props => (
  <ConfigConsumer>
    {({ getPrefixCls, direction }: ConfigConsumerProps) => {
      const {
        prefixCls: customizePrefixCls,
        className: customizeClassName,
        subTitle,
        title,
        style,
        children,
        status,
      } = props;
      const prefixCls = getPrefixCls('result', customizePrefixCls);
      const className = classNames(prefixCls, `${prefixCls}-${status}`, customizeClassName, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
      });
      return (
        <div className={className} style={style}>
          {renderIcon(prefixCls, props)}
          <div className={`${prefixCls}-title`}>{title}</div>
          {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
          {renderExtra(prefixCls, props)}
          {children && <div className={`${prefixCls}-content`}>{children}</div>}
        </div>
      );
    }}
  </ConfigConsumer>
);

Result.defaultProps = {
  status: 'info',
};

// eslint-disable-next-line prefer-destructuring
Result.PRESENTED_IMAGE_403 = ExceptionMap[403];
// eslint-disable-next-line prefer-destructuring
Result.PRESENTED_IMAGE_404 = ExceptionMap[404];
// eslint-disable-next-line prefer-destructuring
Result.PRESENTED_IMAGE_500 = ExceptionMap[500];

export default Result;
