import * as React from 'react';
import { IndicatorProps } from './interfaces';
import { IndicatorClasses, Indicators } from './utils';
import './indicator.scss';

export const IndicatorComponent = ({ max, value }: IndicatorProps) => {
    const classesArr: any = [];
    const indicatorClasses: Indicators = IndicatorClasses;
    indicatorClasses['max'] = max || 0;
    indicatorClasses['indicatorValue'] = value || 0;

    for (const indicator of indicatorClasses) {
        classesArr.push(indicator);
    }

    return (
        <div className='indicator'>
            {
                classesArr.map((cname: string, index: number ) => (
                    <div key={`indicator-column-${index}`} className={`indicator-column ${cname}`}></div>
                ))
            }
        </div>
    );
};

export class Indicator extends React.Component<IndicatorProps, {}> {

    public static defaultProps: Partial<IndicatorProps> = {
        max: undefined,
        value: 0
    };

    constructor(props: IndicatorProps) {
        super(props);
    }

    render() {
        return this.props.max ? (
            <div className='indicator-container'>
                <IndicatorComponent {...this.props } />
            </div>
        ) : null;
    }
}
