// Clone of https://github.com/react-component/checkbox
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Component } from 'react';
import classNames from 'classnames';
import StyledCheckbox, { StyledCheckboxContainer, StyledInnerCheckbox } from './CheckboxNative.styles';

class Checkbox extends Component {
  static defaultProps = {
    prefixCls: 'rc-checkbox',
    className: '',
    style: {},
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {},
    onBlur() {},
    onChange() {},
  };

  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      };
    }
    return null;
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleChange = (e) => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    if (onChange) {
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent,
      });
    }
  };

  saveInput = (node) => {
    this.input = node;
  }

  render() {
    const {
      prefixCls,
      className,
      style,
      name,
      id,
      type,
      disabled,
      readOnly,
      tabIndex,
      onClick,
      onFocus,
      onBlur,
      autoFocus,
      value,
      required,
      ...others
    } = this.props;

    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        // eslint-disable-next-line no-param-reassign
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const { checked } = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <StyledCheckboxContainer
        checked={checked}
        className={classString}
        style={style}
        disabled={disabled}
      >
        <StyledCheckbox
          name={name}
          id={id}
          type={type}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.saveInput}
          value={value}
          {...globalProps}
        />
        <StyledInnerCheckbox
          className={`${prefixCls}-inner`}
          disabled={disabled}
          checked={checked}
        />
      </StyledCheckboxContainer>
    );
  }
}

export default Checkbox;
