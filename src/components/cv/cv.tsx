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
            <p>Obi-Wan Kenobi...Obi-Wan? Now thats a name I haven't heard in a long time...a long time. I think my uncle knew him. He said he was dead. Oh, he's not dead, not...not yet. You know him! Well of course, of course I know him. He's me! I haven't gone by the name Obi-Wan since oh, before you were born. Then the droid does belong to you. Don't seem to remember ever owning a droid. Very interesting... I think we better get indoors. The Sandpeople are easily startled but they will soon be back and in greater numbers. Threepio! Where am I? I must have taken a bad step... Can you stand? We've got to get out of here before the Sandpeople return. I don't think I can make it. You go on, Master Luke. There's no sense in you risking yourself on my account. I'm done for. No, you're not. What kind of talk is that? Quickly, son...they're on the move.</p>
        </CvSection>
    ))

    render() {
        const sections: Array<CvSectionProps> = [
            { title: 'Contacto' },
            { title: 'Formación' },
            { title: 'Experiencía' }
        ];

        return (
            <div className='it-container'>
                <h2>Currículum</h2>
                {this.renderSections(sections)}
            </div>
        );
    }
}
