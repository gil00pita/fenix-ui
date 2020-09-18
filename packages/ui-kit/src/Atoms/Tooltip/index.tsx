import * as React from 'react';
import classNames from 'classnames';
import TooltipTrigger from 'react-popper-tooltip';
import { StyledTooltip, TooltipArrowContent, StyledTooltipTrigger, TooltipContainer, TooltipArrow } from './Tooltip.styles';

// https://github.com/react-component/tooltip
// https://github.com/yiminghe/dom-align
export interface Tooltip {
  children: React.ReactNode;
  points?: [string, string];
  trigger?: [string, string];
  offset?: [number | string, number | string];
  title?: [number | string, number | string | node];
  targetOffset?: [number | string, number | string];
  overflow?: { adjustX: boolean; adjustY: boolean };
  color?: string;
  hideTooltip?: boolean;
  bgColor?: string;
  placement: [
    'bottom',
    'bottomLeft',
    'bottomRight',
    'right',
    'rightTop',
    'rightBottom',
    'left',
    'leftTop',
    'leftBottom',
    'top',
    'topLeft',
    'topRight'
  ];
  style?: React.CSSProperties;
  className?: string;
}

type Props = {
  targetRef: MutableRefObject<null>;
  isVisible: boolean;
};

const tooltipRenamer = (placement) => {
    let arrowPlacement = placement;
  switch (placement) {
    case 'rightTop':
      arrowPlacement = 'right-start';
      break;
    case 'rightBottom':
      arrowPlacement = 'right-end';
      break;
    case 'leftTop':
      arrowPlacement = 'left-start';
      break;
    case 'leftBottom':
      arrowPlacement = 'left-end';
      break;
    case 'bottomLeft':
      arrowPlacement = 'bottom-start';
      break;
    case 'bottomRight':
      arrowPlacement = 'bottom-end';
      break;
    case 'topLeft':
      arrowPlacement = 'top-start';
      break;
    case 'topRight':
      arrowPlacement = 'top-end';
      break;
    default:
      arrowPlacement = placement;
      break;
  }
  // console.log('arrowPlacement', placement + ' + ' + arrowPlacement)
  return arrowPlacement;
}

const Tooltip = ({
  children,
  placement,
  title,
  bgColor,
  color,
  hideArrow,
  hideTooltip,
  ...props
}) => {

  return(
  <TooltipTrigger
    {...props}
    hideTooltip={hideTooltip}
    delayHide={100}
    placement={tooltipRenamer(placement)}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement=tooltipRenamer(placement),
    }) => (
      <StyledTooltip
        {...getTooltipProps({
          ref: tooltipRef,
          placement: placement,
        })}
        >
        <TooltipContainer
          bgColor={bgColor}
          color={color}
          >
          {!hideArrow && (
            <TooltipArrow
              bgColor={bgColor}
              {...getArrowProps({
                ref: arrowRef,
                placement: placement,
              })}
              style={{position: 'absolute'}}
            >
              <TooltipArrowContent
                bgColor={bgColor}
                placement={tooltipRenamer(placement)}
              />
            </TooltipArrow>
          )}
          {title}
        </TooltipContainer>
      </StyledTooltip>
    )}
  >
    {({getTriggerProps, triggerRef}) => (
      <StyledTooltipTrigger
        {...getTriggerProps({
          ref: triggerRef
        })}
      >
        {children}
      </StyledTooltipTrigger>
    )}
  </TooltipTrigger>
)};

Tooltip.defaultProps = {
  title: 'Tooltip',
  trigger: 'hover',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};

export default Tooltip;
