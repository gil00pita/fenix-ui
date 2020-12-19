import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import { CheckCircle, Check, CloseCircle, Close } from '@fenix-ui/icons/mdc';

import { ConfigConsumer, ConfigConsumerProps } from '../Providers/ConfigProvider';
import { tuple } from '@fenix-ui/utils/lib/type';
import devWarning from '@fenix-ui/utils/lib/devWarning';
import Line from './Line';
import Circle from './Circle';
import Steps from './Steps';
import { validProgress } from './utils';
import { LabelWrapper } from './Progress.style';

const ProgressTypes = tuple('line', 'circle', 'dashboard');
export type ProgressType = typeof ProgressTypes[number];
const ProgressStatuses = tuple('normal', 'exception', 'active', 'success');
export type ProgressSize = 'default' | 'small';
export type StringGradients = { [percentage: string]: string };
type FromToGradients = { from: string; to: string };
export type ProgressGradient = { direction?: string } & (StringGradients | FromToGradients);

export interface SuccessProps {
  percent?: number;
  /** @deprecated Use `percent` instead */
  progress?: number;
  strokeColor?: string;
}

export interface ProgressProps {
  prefixCls?: string;
  className?: string;
  type?: ProgressType;
  percent?: number;
  format?: (percent?: number, successPercent?: number) => React.ReactNode;
  status?: typeof ProgressStatuses[number];
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeColor?: string | ProgressGradient;
  trailColor?: string;
  width?: number;
  success?: SuccessProps;
  style?: React.CSSProperties;
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
  size?: ProgressSize;
  steps?: number;
  /** @deprecated Use `success` instead */
  successPercent?: number;
}

export default class Progress extends React.Component<ProgressProps> {
  static defaultProps = {
    type: 'line' as ProgressProps['type'],
    percent: 0,
    showInfo: true,
    // null for different theme definition
    trailColor: null,
    size: 'default' as ProgressProps['size'],
    gapDegree: undefined,
    strokeLinecap: 'round' as ProgressProps['strokeLinecap'],
  };

  getPercentNumber() {
    const { percent = 0, success } = this.props;
    let { successPercent } = this.props;
    /** @deprecated Use `percent` instead */
    if (success && 'progress' in success) {
      successPercent = success.progress;
    }
    if (success && 'percent' in success) {
      successPercent = success.percent;
    }
    return parseInt(
      successPercent !== undefined ? successPercent.toString() : percent.toString(),
      10,
    );
  }

  getProgressStatus() {
    const { status } = this.props;
    if (ProgressStatuses.indexOf(status!) < 0 && this.getPercentNumber() >= 100) {
      return 'success';
    }
    return status || 'normal';
  }

  renderProcessInfo(prefixCls: string, progressStatus: typeof ProgressStatuses[number]) {
    const { showInfo, format, type, percent, success, strokeColor } = this.props;
    let { successPercent } = this.props;
    if (success && 'progress' in success) {
      devWarning(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.');
      successPercent = success.progress;
    }
    if (success && 'percent' in success) {
      successPercent = success.percent;
    }
    if (!showInfo) return null;

    let text;
    const textFormatter = format || (percentNumber => `${percentNumber}%`);
    const isLineType = type === 'line';
    if (format || (progressStatus !== 'exception' && progressStatus !== 'success')) {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? <CloseCircle size="2rem"/> : <Close size="2rem"/>;
    } else if (progressStatus === 'success') {
      text = isLineType ? <CheckCircle size="2rem"/> : <Check size="2rem"/>;
    }

    return (
      <LabelWrapper
        title={typeof text === 'string' ? text : undefined}
        type={type}
        progressStatus={progressStatus}
        strokeColor={strokeColor}
      >
        {text}
      </LabelWrapper>
    );
  }

  renderProgress = ({ getPrefixCls, direction }: ConfigConsumerProps) => {
    const { props } = this;
    const {
      prefixCls: customizePrefixCls,
      className,
      size,
      type,
      steps,
      showInfo,
      strokeColor,
      ...restProps
    } = props;
    const prefixCls = getPrefixCls('progress', customizePrefixCls);
    const progressStatus = this.getProgressStatus();
    const progressInfo = this.renderProcessInfo(prefixCls, progressStatus);

    devWarning(
      !('successPercent' in props),
      'Progress',
      '`successPercent` is deprecated. Please use `success` instead.',
    );

    let progress;
    // Render progress shape
    if (type === 'line') {
      progress = steps ? (
        <Steps
          {...this.props}
          strokeColor={typeof strokeColor === 'string' ? strokeColor : undefined}
          prefixCls={prefixCls}
          steps={steps}
        >
          {progressInfo}
        </Steps>
      ) : (
        <Line {...this.props} prefixCls={prefixCls}>
          {progressInfo}
        </Line>
      );
    } else if (type === 'circle' || type === 'dashboard') {
      progress = (
        <Circle
          {...this.props}
          prefixCls={prefixCls}
          progressStatus={progressStatus}
          strokeColor={strokeColor}
        >
          {progressInfo}
        </Circle>
      );
    }

    const classString = classNames(
      prefixCls,
      {
        [`${prefixCls}-${(type === 'dashboard' && 'circle') || (steps && 'steps') || type}`]: true,
        [`${prefixCls}-status-${progressStatus}`]: true,
        [`${prefixCls}-show-info`]: showInfo,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-rtl`]: direction === 'rtl',
      },
      className,
    );

    return (
      <div
        {...omit(restProps, [
          'status',
          'format',
          'trailColor',
          'strokeWidth',
          'width',
          'gapDegree',
          'gapPosition',
          'strokeColor',
          'strokeLinecap',
          'percent',
          'steps',
          'success',
          'successPercent',
        ])}
        className={classString}
      >
        {progress}
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderProgress}</ConfigConsumer>;
  }
}
