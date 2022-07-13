import React, { useMemo } from 'react'
import classnames from 'classnames';
import { BaseElements, Color, IButtonElementProps, IContainerElementProps, Size } from '..'
import { normalizeStatus } from '../elements';

const { Button: BaseButton, Div } = BaseElements

interface ButtonProps {
  color?: Color
  | 'ghost'
  | 'black-bis'
  | 'black-ter'
  | 'white-bis'
  | 'white-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey-light'
  | 'grey-lighter';
  size?: Size;
  state?: 'hover' | 'focus' | 'active';
  outlined?: boolean;
  inverted?: boolean;
  // submit?: boolean;
  // reset?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
  remove?: boolean;
  isSelected?: boolean;
  isStatic?: boolean;
  rounded?: boolean;
  text?: boolean;
  status?: "active" | "focus" | "hover"
}

type IButtonProps = Omit<IButtonElementProps, 'renderAs'> & ButtonProps

const ButtonComponent = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {

  const { children,
    className,
    color,
    size,
    outlined,
    inverted,
    fullwidth,
    status,
    loading,
    disabled,
    remove,
    isSelected,
    isStatic,
    rounded,
    onClick,
    text,
    ...rest } = props

  const classNames = useMemo(() => {

    return classnames(className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      'is-selected': isSelected,
      'is-static': isStatic,
      'is-rounded': rounded,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-fullwidth': fullwidth,
      [`is-${normalizeStatus(status)}`]: status,
      'is-loading': loading,
      'is-text': text,
      delete: remove,
      button: !remove,
    })

  }, [className, color, fullwidth, inverted, isSelected, isStatic, loading, outlined, remove, rounded, size, status, text])

  return (
    <BaseButton
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
      className={classNames}
    >
      {children}
    </BaseButton>
  )
})

interface ButtonGroupProps {
  size?: Size;
  hasAddons?: boolean;
  align?: 'center' | 'right';
}

type IButtonGroupProps = Omit<IContainerElementProps, 'renderAs'> & ButtonGroupProps


const ButtonGroupComponent = React.forwardRef<HTMLDivElement, IButtonGroupProps>(({ children,
  hasAddons,
  className, ...props }, ref) => {

  const classNames = useMemo(() => {
    return classnames(className, 'buttons', {
      'has-addons': hasAddons
    })
  }, [className, hasAddons])

  return (
    <Div {...props} className={classNames} ref={ref}>
      {children}
    </Div>
  )
})

type IButtonType = typeof ButtonComponent

interface IButton extends IButtonType {
  Group: typeof ButtonGroupComponent
}

const Button = ButtonComponent as IButton
Button.Group = ButtonGroupComponent

export default Button