import BaseElements, {
    IButtonElementProps,
    IContainerElementProps
} from "./elements";

interface HelperProps {
    clearfix?: boolean;
    pull?: 'left' | 'right';
    marginless?: boolean;
    paddingless?: boolean;
    overlay?: boolean;
    clipped?: boolean;
    radiusless?: boolean;
    shadowless?: boolean;
    unselectable?: boolean;
    invisible?: boolean;
    hidden?: boolean;
    srOnly?: boolean;
}


type DisplayModifier =
    | 'relative'
    | 'block'
    | 'flex'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'hidden';

interface ResponsiveModifiers {
    display?: DisplayModifier;
    textSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | Number | string;
    invisible?: Boolean;
    textAlign?: 'center' | 'justify' | 'left' | 'right';
}

interface ResponsiveProps {
    display?: DisplayModifier;
    mobile?: ResponsiveModifiers;
    tablet?: ResponsiveModifiers & { only?: Boolean; };
    desktop?: ResponsiveModifiers & { only?: Boolean; };
    widescreen?: ResponsiveModifiers & { only?: Boolean; };
    fullhd?: ResponsiveModifiers;
    touch?: ResponsiveModifiers;
    untilWidescreen?: ResponsiveModifiers;
    untilFullhd?: ResponsiveModifiers;
}

type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | Number | string;

interface SpacingProps {
    m?: SpacingSize;
    mt?: SpacingSize;
    mr?: SpacingSize;
    mb?: SpacingSize;
    ml?: SpacingSize;
    mx?: SpacingSize;
    my?: SpacingSize;
    p?: SpacingSize;
    pt?: SpacingSize;
    pr?: SpacingSize;
    pb?: SpacingSize;
    pl?: SpacingSize;
    px?: SpacingSize;
    py?: SpacingSize;
}

interface FlexboxProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
    alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline';
    alignItems?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
    flexGrow?: 0 | 1 | 2 | 3 | 4 | 5,
    flexShrink?: 0 | 1 | 2 | 3 | 4 | 5,
}

interface TypographyProps {
    textSize?: 1 | 2 | 3 | 4 | 5 | 6 | Number | string;
    textAlign?: 'center' | 'justify' | 'left' | 'right' | string;
    textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
    textWeight?: 'light' | 'normal' | 'semibold' | 'bold';
    textFamily?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code' | string;
    italic?: boolean;
}


/**
 * Defines all Bulma color values
 */
export type Color =
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'white'
    | 'black'
    | 'link'
    | string;


interface ColorProps {
    textColor?: string;
    backgroundColor?: string;
    colorVariant?: 'light' | 'dark' | string;
}


type ModifierProps = SpacingProps &
    FlexboxProps &
    HelperProps &
    ColorProps &
    ResponsiveProps &
    TypographyProps;

type Breakpoint =
    | 'desktop'
    | 'tablet'
    | 'mobile'
    | 'widescreen'
    | 'fullhd'
    | 'touch'
    | string;


export type {
    DisplayModifier,
    ResponsiveModifiers,
    HelperProps,
    SpacingSize,
    FlexboxProps,
    SpacingProps,
    ResponsiveProps,
    Breakpoint,
    ModifierProps
}


export type Size = 'small' | 'medium' | 'large' | string;

// export components
export { BaseElements }

export type {
    IButtonElementProps,
    IContainerElementProps
}