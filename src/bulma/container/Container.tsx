import classNames from 'classnames';
import React from 'react'
import { Breakpoint, BaseElements, IContainerElementProps } from '..'

const { Div } = BaseElements

type IProps = IContainerElementProps & {
    max?: boolean;
    breakpoint?: Breakpoint | 'fluid';
}

const Container = React.forwardRef<HTMLDivElement, IProps>(({ children, max, breakpoint, className, ...props }, ref) => {
    const canSetMax = ['desktop', 'widescreen'].includes(breakpoint ?? '');
    return (
        <Div
            {...props}
            className={classNames('container', className, {
                [`is-${canSetMax && max ? 'max-' : ''}${breakpoint}`]: breakpoint,
            })}
            ref={ref}
        >
            {children}
        </Div>
    )
})

export default Container