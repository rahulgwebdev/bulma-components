import React from 'react';
import classnames from 'classnames';
import { IElementProps, ResponsiveModifiers, ResponsiveProps } from './../index'

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
}: Omit<IElementProps, 'renderAs' | 'innerRef'>) => ({
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


const Element = (props: IElementProps) => {
  const { renderAs, className, innerRef, children, ...rest } = props
  const { classNames, props: remainingProps } = useElementClassNames(rest);
  if (renderAs === "div") {
    return <div className={classnames(className, classNames) || undefined}  {...remainingProps} ref={innerRef as React.ForwardedRef<HTMLDivElement> | undefined}>{children}</div>
  }
  return <span className={classnames(className, classNames) || undefined} {...remainingProps} ref={innerRef as React.ForwardedRef<HTMLSpanElement> | undefined}>{children}</span>
}


export default Element