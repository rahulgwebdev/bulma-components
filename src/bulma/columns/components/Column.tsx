
import React, { forwardRef, useMemo } from 'react'
import { ColumnProps } from '../index'
import Element from '../../elements'
import { IElementProps } from '../..'
import classNames from 'classnames'

type IProps = Omit<IElementProps, 'renderAs'> & ColumnProps

const Column = forwardRef<HTMLDivElement, IProps>((props, ref) => {
    const { children,
        className,
        size,
        offset,
        narrow,
        mobile,
        tablet,
        desktop,
        widescreen,
        fullhd,
        touch,
        ...rest } = props

    const classnames = useMemo(() => {

        const restClassNames = {} as { [key: string]: boolean }

        if (touch) {
            if ('size' in touch && touch.size !== undefined) {
                restClassNames[`is-${touch.size}-mobile`] = true
            }
            if ('offset' in touch && touch.offset !== undefined) {
                restClassNames[`is-offset-${touch.offset}-mobile`] = true
            }
        }

        if (mobile) {
            if ('size' in mobile && mobile.size !== undefined) {
                restClassNames[`is-${mobile.size}-mobile`] = true
            }
            if ('offset' in mobile && mobile.offset !== undefined) {
                restClassNames[`is-offset-${mobile.offset}-mobile`] = true
            }
        }

        if (tablet) {
            if ('size' in tablet && tablet.size !== undefined) {
                restClassNames[`is-${tablet.size}-tablet`] = true
            }
            if ('offset' in tablet && tablet.offset !== undefined) {
                restClassNames[`is-offset-${tablet.offset}-tablet`] = true
            }
        }

        if (desktop) {
            if ('size' in desktop && desktop.size !== undefined) {
                restClassNames[`is-${desktop.size}-desktop`] = true
            }
            if ('offset' in desktop && desktop.offset !== undefined) {
                restClassNames[`is-offset-${desktop.offset}-desktop`] = true
            }
        }

        if (widescreen) {
            if ('size' in widescreen && widescreen.size !== undefined) {
                restClassNames[`is-${widescreen.size}-widescreen`] = true
            }
            if ('offset' in widescreen && widescreen.offset !== undefined) {
                restClassNames[`is-offset-${widescreen.offset}-widescreen`] = true
            }
        }

        if (fullhd) {
            if ('size' in fullhd && fullhd.size !== undefined) {
                restClassNames[`is-${fullhd.size}-fullhd`] = true
            }
            if ('offset' in fullhd && fullhd.offset !== undefined) {
                restClassNames[`is-offset-${fullhd.offset}-fullhd`] = true
            }
        }

        return classNames(className, 'column', {
            [`is-${size}`]: size,
            ...restClassNames,
            [`is-offset-${offset}`]: offset,
            'is-narrow': narrow,
            'is-narrow-touch': touch && touch.narrow,
            'is-narrow-mobile': mobile && mobile.narrow,
            'is-narrow-tablet': tablet && tablet.narrow,
            'is-narrow-desktop': desktop && desktop.narrow,
            'is-narrow-widescreen': widescreen && widescreen.narrow,
            'is-narrow-fullhd': fullhd && fullhd.narrow,
        })

    }, [
        className,
        size,
        offset,
        narrow,
        mobile,
        tablet,
        desktop,
        widescreen,
        fullhd,
        touch,
    ])

    return (
        <Element renderAs='div' {...rest}
            {...{ mobile, tablet, desktop, widescreen, fullhd, touch }}
            className={classnames}
            innerRef={ref}>
            {children}
        </Element>
    )
})

export default Column;