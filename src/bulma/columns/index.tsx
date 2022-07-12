import { Breakpoint, ResponsiveModifiers } from '..'
import InternalColumns from './Columns'
import Column from './components/Column'

interface GapProps {
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | String | Number;
}

interface ColumnGroupProps {
    touch?: GapProps & ResponsiveModifiers;
    mobile?: GapProps & ResponsiveModifiers;
    tablet?: GapProps & ResponsiveModifiers;
    desktop?: GapProps & ResponsiveModifiers;
    widescreen?: GapProps & ResponsiveModifiers;
    fullhd?: GapProps & ResponsiveModifiers;
    breakpoint?: Breakpoint;
    gap?: GapProps['gap'];
    multiline?: boolean;
    centered?: boolean;
    vCentered?: boolean;
}

type ColumnSize =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 'three-quarters'
    | 'two-thirds'
    | 'half'
    | 'one-third'
    | 'one-quarter'
    | 'one-fifth'
    | 'two-fifths'
    | 'three-fifths'
    | 'four-fifths';

interface ColumnBreakpointConfiguration {
    size?: ColumnSize;
    offset?: ColumnSize;
    narrow?: boolean;
}

interface ColumnProps {
    size?: ColumnSize;
    offset?: ColumnSize;
    narrow?: boolean;
    touch?: ColumnBreakpointConfiguration & ResponsiveModifiers;
    mobile?: ColumnBreakpointConfiguration & ResponsiveModifiers;
    tablet?: ColumnBreakpointConfiguration & ResponsiveModifiers;
    desktop?: ColumnBreakpointConfiguration & ResponsiveModifiers;
    widescreen?: ColumnBreakpointConfiguration & ResponsiveModifiers;
    fullhd?: ColumnBreakpointConfiguration & ResponsiveModifiers;
}


//  export component
type InternalColumnsType = typeof InternalColumns

const constants = {
    SIZES: {
        THREEQUARTERS: 'three-quarters',
        TWOTHIRDS: 'two-thirds',
        HALF: 'half',
        ONETHIRD: 'one-third',
        ONEQUARTER: 'one-quarter',
        ONEFIFTH: 'one-fifth',
        TWOFIFTHS: 'two-fifths',
        THREEFIFTHS: 'three-fifths',
        FOURFIFTHS: 'four-fifths',
    },
};

interface ColumnsType extends InternalColumnsType {
    Column: typeof Column
    constants: {
        SIZES: {
            THREEQUARTERS: 'three-quarters',
            TWOTHIRDS: 'two-thirds',
            HALF: 'half',
            ONETHIRD: 'one-third',
            ONEQUARTER: 'one-quarter',
            ONEFIFTH: 'one-fifth',
            TWOFIFTHS: 'two-fifths',
            THREEFIFTHS: 'three-fifths',
            FOURFIFTHS: 'four-fifths',
        },
    }
}

const Columns = InternalColumns as ColumnsType

Columns.Column = Column

export default Columns


export type { ColumnGroupProps, ColumnProps }
