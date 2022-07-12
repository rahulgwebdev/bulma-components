import classNames from 'classnames';
import React from 'react'
import { Breakpoint, Element, IElementProps } from '..'

type IProps = IElementProps & {
    max?: boolean;
    breakpoint?: Breakpoint | 'fluid';
}

const Container = React.forwardRef<HTMLDivElement, IProps>(({ children, max, breakpoint, className, ...props }, ref) => {
    const canSetMax = ['desktop', 'widescreen'].includes(breakpoint ?? '');
    return (
        <Element
            {...props}
            renderAs='div'
            innerRef={ref}
            className={classNames('container', className, {
                [`is-${canSetMax && max ? 'max-' : ''}${breakpoint}`]: breakpoint,
            })}
        >{children}

        </Element>
    )
})

export default Container