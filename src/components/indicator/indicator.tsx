import * as React from 'react';
import { IndicatorProps } from './interfaces';
import { IndicatorClasses } from './utils';
import './indicator.scss';

export class Indicator extends React.Component<IndicatorProps, {}> {

    public static defaultProps: Partial<IndicatorProps> = {
        max: undefined,
        value: 0
    };

    constructor(props: IndicatorProps) {
        super(props);
    }

    render() {
        const { max } = this.props;
        return max ? (
            <div className='indicator-container'>

            </div>
        ) : null;
    }
}
