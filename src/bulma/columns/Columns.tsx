import classNames from 'classnames';
import React, { forwardRef, useMemo } from 'react'
import { ColumnGroupProps } from '.';
import { IElementProps } from '..';
import Element from '../elements'

type ColumnsProps = Omit<IElementProps, 'renderAs'> & ColumnGroupProps

const Columns = forwardRef<HTMLDivElement, ColumnsProps>((props, ref) => {

  const { children,
    className,
    breakpoint,
    gap,
    multiline,
    centered,
    vCentered,
    // variableGap,
    mobile,
    tablet,
    desktop,
    widescreen,
    fullhd,
    touch,
    ...rest } = props

  const classnames = useMemo(() => {

    let gapClassNames = {} as { [key: string]: boolean }

    if (touch && touch.hasOwnProperty('gap') && touch.gap !== undefined) {
      gapClassNames[`is-${touch.gap}-touch`] = true
    }
    if (mobile && mobile.hasOwnProperty('gap') && mobile.gap !== undefined) {
      gapClassNames[`is-${mobile.gap}-mobile`] = true
    }
    if (tablet && tablet.hasOwnProperty('gap') && tablet.gap !== undefined) {
      gapClassNames[`is-${tablet.gap}-tablet`] = true
    }
    if (desktop && desktop.hasOwnProperty('gap') && desktop.gap !== undefined) {
      gapClassNames[`is-${desktop.gap}-desktop`] = true
    }
    if (widescreen && widescreen.hasOwnProperty('gap') && widescreen.gap !== undefined) {
      gapClassNames[`is-${widescreen.gap}-widescreen`] = true
    }
    if (fullhd && fullhd.hasOwnProperty('gap') && fullhd.gap !== undefined) {
      gapClassNames[`is-${fullhd.gap}-fullhd`] = true
    }

    return classNames(className, 'columns', {
      [`is-${breakpoint}`]: breakpoint,
      [`is-${gap}`]: gap !== undefined,
      'is-multiline': multiline,
      'is-centered': centered,
      'is-vcentered': vCentered,
      'is-variable':
        gap !== undefined ||
        [touch, mobile, tablet, desktop, widescreen, fullhd].find((b) => {
          return b && 'gap' in b !== undefined;
        }),
      ...gapClassNames
    });
  }, [
    className,
    breakpoint,
    gap,
    multiline,
    centered,
    vCentered,
    // variableGap,
    mobile,
    tablet,
    desktop,
    widescreen,
    fullhd,
    touch])

  // const propsWithoutGaps = useMemo(() => {
  //   const object = {
  //     mobile: mobile && !('gap' in mobile) ? mobile as ResponsiveModifiers : mobile,
  //     tablet: tablet && !('gap' in tablet) ? tablet as ResponsiveModifiers : tablet,
  //     desktop: desktop && !('gap' in desktop) ? desktop as ResponsiveModifiers : desktop,
  //     widescreen: widescreen && !('gap' in widescreen) ? widescreen as ResponsiveModifiers : widescreen,
  //     fullhd: fullhd && !('gap' in fullhd) ? fullhd as ResponsiveModifiers : fullhd,
  //     touch: touch && !('gap' in touch) ? touch as ResponsiveModifiers : touch,
  //   }
  //   return object
  // }, [mobile, tablet, desktop, widescreen, fullhd, touch])

  return (
    <Element renderAs='div'
      {...rest}
      {...{ mobile, tablet, desktop, widescreen, fullhd, touch }}
      className={classnames}
      innerRef={ref}
    >{children}</Element>
  )
})

Columns.defaultProps = {
  multiline: true
}

export default Columns