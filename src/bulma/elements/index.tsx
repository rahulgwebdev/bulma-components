import React, { ComponentPropsWithoutRef } from 'react';
import classnames from 'classnames';
import { ModifierProps, ResponsiveModifiers, ResponsiveProps } from './../index'

interface IDiv extends ComponentPropsWithoutRef<"div"> {
  renderAs: 'div'
  innerRef?: React.ForwardedRef<HTMLDivElement>
}

interface ISpan extends ComponentPropsWithoutRef<"span"> {
  renderAs: 'span'
  innerRef?: React.ForwardedRef<HTMLSpanElement>
}

type IContainerElement = IDiv | ISpan

type IContainerElementProps = IContainerElement & ModifierProps

export const normalizeAlign = (align?: string) => {

  if (align === 'center' || align === "justify") {
    const map = {
      justify: 'justifyed',
      center: 'centered',
    };
    return map[align]
  }
  return align;
};

export const normalizeStatus = (status?: string) => {
  if (status === "active" || status === "focus" || status === "hover") {
    const map = {
      focus: 'focused',
      hover: 'hovered',
      active: 'active',
    };
    return map[status]
  }
  return status;
};

const buildResponsiveness = (
  currentViewport: keyof Omit<ResponsiveProps, 'display'> | 'until-widescreen' | 'until-fullhd',
  params?: ResponsiveModifiers & { only?: Boolean }
) => {
  if (params) {
    const { display, textAlign, textSize, invisible } = params
    const suffix = params.hasOwnProperty('only') && params.only ? '-only' : '';
    return classnames({
      [`is-${display}-${currentViewport}${suffix}`]: display,
      [`has-text-${normalizeAlign(
        textAlign,
      )}-${currentViewport}${suffix}`]: textAlign,
      [`is-size-${textSize}-${currentViewport}${suffix}`]: textSize,
      [`is-invisible-${currentViewport}${suffix}`]: invisible,
    });
  }
  return ''
};

export const useElementClassNames = ({
  textColor,
  backgroundColor,
  colorVariant,
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  flexGrow,
  // ratio,
  clearfix,
  paddingless,
  pull,
  marginless,
  overlay,
  clipped,
  radiusless,
  shadowless,
  unselectable,
  invisible,
  // clickable,
  srOnly,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  textWeight,
  textTransform,
  italic,
  textSize,
  textAlign,
  textFamily,
  // responsive
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  touch,
  untilWidescreen,
  untilFullhd,
  ...props
}: Omit<IContainerElementProps, 'renderAs' | 'innerRef'> | IButtonElementProps) => ({
  classNames: classnames(
    {
      [`has-text-${textColor}`]: textColor,
      [`has-background-${backgroundColor}`]: backgroundColor,
      [`is-${colorVariant}`]: colorVariant,
      [`is-flex-direction-${flexDirection}`]: flexDirection,
      [`is-flex-wrap-${flexWrap}`]: flexWrap,
      [`is-justify-content-${justifyContent}`]: justifyContent,
      [`is-align-content-${alignContent}`]: alignContent,
      [`is-align-items-${alignItems}`]: alignItems,
      [`is-flex-grow-${flexGrow}`]: flexGrow,
      'is-clearfix': clearfix,
      [`is-pulled-${pull}`]: pull,
      'is-marginless': marginless,
      'is-paddingless': paddingless,
      'is-overlay': overlay,
      'is-clipped': clipped,
      'is-radiusless': radiusless,
      'is-shadowless': shadowless,
      'is-unselectable': unselectable,
      [`is-${display}`]: display,
      'is-invisible': invisible,
      'is-sr-only': srOnly,
      // // 'is-clickable': clickable,
      [`m-${m}`]: m,
      [`mt-${mt}`]: mt,
      [`mr-${mr}`]: mr,
      [`mb-${mb}`]: mb,
      [`ml-${ml}`]: ml,
      [`mx-${mx}`]: mx,
      [`my-${my}`]: my,
      [`p-${p}`]: p,
      [`pt-${pt}`]: pt,
      [`pr-${pr}`]: pr,
      [`pb-${pb}`]: pb,
      [`pl-${pl}`]: pl,
      [`px-${px}`]: px,
      [`py-${py}`]: py,
      [`has-text-${normalizeAlign(textAlign)}`]: textAlign,
      [`has-text-weight-${textWeight}`]: textWeight,
      [`is-size-${textSize}`]: textSize,
      [`is-${textTransform}`]: textTransform,
      [`is-family-${textFamily}`]: textFamily,
      'is-italic': italic,
    },
    buildResponsiveness('mobile', mobile),
    buildResponsiveness('tablet', tablet),
    buildResponsiveness('desktop', desktop),
    buildResponsiveness('widescreen', widescreen),
    buildResponsiveness('fullhd', fullhd),
    buildResponsiveness('touch', touch),
    buildResponsiveness('until-widescreen', untilWidescreen),
    buildResponsiveness('until-fullhd', untilFullhd),
  ),
  props,
})


const ContainerElement = (props: IContainerElementProps) => {
  const { renderAs, className, innerRef, children, ...rest } = props
  const { classNames, props: remainingProps } = useElementClassNames(rest);
  if (renderAs === "div") {
    return <div className={classnames(className, classNames) || undefined}  {...remainingProps as IContainerElementProps} ref={innerRef as React.ForwardedRef<HTMLDivElement> | undefined}>{children}</div>
  }
  return <span className={classnames(className, classNames) || undefined} {...remainingProps} ref={innerRef as React.ForwardedRef<HTMLSpanElement> | undefined}>{children}</span>
}

const Div = React.forwardRef<HTMLDivElement, Omit<IContainerElementProps, 'renderAs' | 'innerRef'>>(({ children, ...rest }, ref) => {
  return <ContainerElement renderAs="div" {...rest} innerRef={ref}>
    {children}
  </ContainerElement>
})

const Span = React.forwardRef<HTMLSpanElement, Omit<IContainerElementProps, 'renderAs' | 'innerRef'>>(({ children, ...rest }, ref) => {
  return <ContainerElement renderAs="span" {...rest} innerRef={ref}>
    {children}
  </ContainerElement>
})

type IButtonElementProps = ComponentPropsWithoutRef<"button"> & ModifierProps

const ButtonElement = React.forwardRef<HTMLButtonElement, IButtonElementProps>((props, ref) => {
  const { className, children, ...rest } = props
  const { classNames, props: remainingProps } = useElementClassNames(rest);

  return <button
    className={classnames(className, classNames) || undefined}
    {...remainingProps as IButtonElementProps} ref={ref}>
    {children}
  </button>
})

const BaseElements = {
  Div: Div,
  Span: Span,
  Button: ButtonElement
}

export type {
  IButtonElementProps,
  IContainerElementProps
}


export default BaseElements