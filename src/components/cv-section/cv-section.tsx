import * as React from 'react';
import { CvSectionProps } from './interfaces';
import { I18nText } from '../../providers/i18n';
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
                    <h3><I18nText text={title}/></h3>
                    <div className='cv-section-content'>
                        {this.props.children}
                    </div>
                </div>
            ) : null;
    }
}
