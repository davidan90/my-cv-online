import * as React from 'react';
import { CvSection, CvSectionProps } from '../cv-section';
import './cv.scss';

export class Cv extends React.Component<{ children?: any }, {}> {

    constructor(props: { children?: any }) {
        super(props);
    }

    renderSections = (sections: Array<CvSectionProps>) => sections.map((sectionProps: CvSectionProps, index: number) => (
        <CvSection key={`cv-section-${index}`} {...sectionProps}>
            {/* <span>aaaa</span>
            <p>Obi-Wan Kenobi...Obi-Wan? Now thats a name I haven't heard in a long time...a long time. I think my uncle knew him. He said he was dead. Oh, he's not dead, not...not yet. You know him! Well of course, of course I know him. He's me! I haven't gone by the name Obi-Wan since oh, before you were born. Then the droid does belong to you. Don't seem to remember ever owning a droid. Very interesting... I think we better get indoors. The Sandpeople are easily startled but they will soon be back and in greater numbers. Threepio! Where am I? I must have taken a bad step... Can you stand? We've got to get out of here before the Sandpeople return. I don't think I can make it. You go on, Master Luke. There's no sense in you risking yourself on my account. I'm done for. No, you're not. What kind of talk is that? Quickly, son...they're on the move.</p> */}
        </CvSection>
    ))

    render() {
        const sections: Array<CvSectionProps> = [
            {
                title: 'Contacto',
                children: (
                    <div className='cv-section-container contact'>
                        <div className='cv-contact-item'>
                            <span className='cv-contact-item-title'>David Álvarez Navarro</span>
                            <span className='cv-contact-item-profile'>Desarrollador web</span>
                            <span className='cv-contact-item-email'>david16an@gmail.com</span>
                            <span className='cv-contact-item-phone'>+34 646719565</span>
                        </div>
                    </div>
                )
            },
            {
                title: 'Formación',
                children: (
                    <div className='cv-section-container studies'>
                        <div className='cv-studies-item'>
                            <span className='cv-studies-item-title'>IES El Lago</span>
                            <span className='cv-studies-item-info'>Desarrollo de aplicaciones web</span>
                            <span className='cv-studies-item-date'>2012 - 2014</span>
                        </div>
                        <div className='cv-studies-item'>
                            <span className='cv-studies-item-title'>Universidad Rey Juan Carlos</span>
                            <span className='cv-studies-item-info'>Comunicación Audiovisual</span>
                            <span className='cv-studies-item-date'>2008 - 2012</span>
                        </div>
                    </div>
                )
            },
            {
                title: 'Experiencía',
                children: (
                    <div className='cv-section-container experience'>
                        <div className='cv-experience-item'>
                            <span className='cv-experience-item-title'>Amaris</span>
                            <span className='cv-experience-item-info'>Desarrollador front end</span>
                            <span className='cv-experience-item-description'>Javascript, Angular2, React, ES6, Lodash, jQuery, Webpack, HTML5, CSS3.</span>
                            <span className='cv-experience-item-date'>07/2017 - Actual</span>
                        </div>
                        <div className='cv-experience-item'>
                            <span className='cv-experience-item-title'>GFI</span>
                            <span className='cv-experience-item-info'>Desarrollador full stack</span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, ES6, Lodash, HTML5 ,CSS3, Java, Spring MVC, Spring REST, Spring Boot, Spring Data.</span>
                            <span className='cv-experience-item-date'>09/2016 - 07/2017</span>
                        </div>
                        <div className='cv-experience-item'>
                            <span className='cv-experience-item-title'>Logtrust</span>
                            <span className='cv-experience-item-info'>Desarrollador front end</span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, ES6, Lodash, ReactJs, HTML5, CSS3, Python, Java.</span>
                            <span className='cv-experience-item-date'>09/2015 - 09/2016</span>
                        </div>
                        <div className='cv-experience-item'>
                            <span className='cv-experience-item-title'>Aerin Sistemas</span>
                            <span className='cv-experience-item-info'>Desarrollador full stack</span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, HTML5, CSS3, Python, Django, NodeJs.</span>
                            <span className='cv-experience-item-date'>03/2015 - 09/2015</span>
                        </div>
                        <div className='cv-experience-item'>
                            <span className='cv-experience-item-title'>Atos</span>
                            <span className='cv-experience-item-info'>Desarrollador full stack</span>
                            <span className='cv-experience-item-description'>Javascript, jQuery, HTML5, CSS3, Java, Groovy, Spring MVC, Hibernate.</span>
                            <span className='cv-experience-item-date'>04/2014 - 03/2015</span>
                        </div>
                    </div>
                )
            }
        ];

        return (
            <div className='it-container'>
                <h2>Currículum</h2>
                {this.renderSections(sections)}
            </div>
        );
    }
}
