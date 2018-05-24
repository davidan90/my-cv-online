import * as React from 'react';
import { CvSection, CvSectionProps } from '../cv-section';
import './cv.scss';

export class Cv extends React.Component<{ children?: any }, {}> {

    constructor(props: { children?: any }) {
        super(props);
    }

    renderSections = (sections: Array<CvSectionProps>) => sections.map((sectionProps: CvSectionProps, index: number) => (
        <CvSection key={`cv-section-${index}`} {...sectionProps}>
            <span>aaaa</span>
        </CvSection>
    ))

    render() {
        const sections: Array<CvSectionProps> = [
            { title: 'Contacto' }
        ];

        return (
            <div className='it-container'>
                <h2>Currículum</h2>
                {this.renderSections(sections)}
            </div>
        );
    }
}
