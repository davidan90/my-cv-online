import * as React from 'react';
import { CvSectionProps } from './interfaces';
import './cv-section.scss';

export class CvSection extends React.Component<CvSectionProps, {}> {
    public static defaultProps: Partial<CvSectionProps> = {
        title: undefined
    };

    constructor(props: CvSectionProps) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return title ?
            (
                <div className='cv-section'>
                    <h3>{title}</h3>
                    {this.props.children}
                </div>
            ) : null;
    }
}
