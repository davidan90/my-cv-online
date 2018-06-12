import * as React from 'react';
import { CvSection, CvSectionProps } from '../cv-section';
import { CvDownload } from '../cv-download';
import { I18nText } from '../../providers';
import './cv.scss';

export class Cv extends React.Component<{ children?: any }, {}> {

    constructor(props: { children?: any }) {
        super(props);
    }

    renderSections = (sections: Array<CvSectionProps>) => sections.map((sectionProps: CvSectionProps, index: number) => (
        <CvSection key={`cv-section-${index}`} {...sectionProps}/>
    ))

    render() {
        const sections: Array<CvSectionProps> = [
            {
                title: 'Contacto',
                children: (
                    <div className='cv-section-container cv-contact'>
                        <div className='cv-contact-item'>
                            <span className='cv-contact-item-title'><b><I18nText text='cv.label.name'/>:</b> David Álvarez Navarro </span>
                            <span className='cv-contact-item-profile'><b><I18nText text='cv.label.profile'/>:</b> <I18nText text='cv.data.profile'/></span>
                            <span className='cv-contact-item-email'><b><I18nText text='cv.label.mail'/>:</b> david16an@gmail.com </span>
                            <span className='cv-contact-item-phone'><b><I18nText text='cv.label.phone'/>:</b> +34 646719565 </span>
                        </div>
                    </div>
                )
            },
            {
                title: 'Formación',
                children: (
                    <div className='cv-section-container cv-studies'>
                        <div className='cv-studies-item'>
                            <span className='cv-studies-item-title'><I18nText text='cv.data.education.fp.venue'/></span>
                            <span className='cv-studies-item-info'><I18nText text='cv.data.education.fp.name'/></span>
                            <span className='cv-studies-item-date'>2012 - 2014</span>
                        </div>
                        <div className='cv-studies-item'>
                            <span className='cv-studies-item-title'><I18nText text='cv.data.education.college.venue'/></span>
                            <span className='cv-studies-item-info'><I18nText text='cv.data.education.college.name'/></span>
                            <span className='cv-studies-item-date'>2008 - 2012</span>
                        </div>
                    </div>
                )
            },
            {
                title: 'Experiencía',
                children: (
                    <div className='cv-section-container cv-experience'>
                        <div className='cv-experience-item'>
                            <div className='cv-experience-item-title'><span> Amaris </span><span>07/2017 - <I18nText text='cv.data.dates.current'/></span></div>
                            <span className='cv-experience-item-info'><I18nText text='cv.data.experience.front-developer'/></span>
                            <span className='cv-experience-item-description'>Javascript, Angular2, React, ES6, Lodash, jQuery, Webpack, HTML5, CSS3.</span>
                        </div>
                        <div className='cv-experience-item'>
                            <div className='cv-experience-item-title'><span> GFI </span><span>09/2016 - 07/2017</span></div>
                            <span className='cv-experience-item-info'><I18nText text='cv.data.experience.full-developer'/></span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, ES6, Lodash, HTML5 ,CSS3, Java, Spring MVC, Spring REST, Spring Boot, Spring Data.</span>
                        </div>
                        <div className='cv-experience-item'>
                            <div className='cv-experience-item-title'><span> Logtrust </span><span>09/2015 - 09/2016</span></div>
                            <span className='cv-experience-item-info'><I18nText text='cv.data.experience.front-developer'/></span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, ES6, Lodash, ReactJs, HTML5, CSS3, Python, Java.</span>
                        </div>
                        <div className='cv-experience-item'>
                            <div className='cv-experience-item-title'><span> Aerin Sistemas </span><span>03/2015 - 09/2015</span></div>
                            <span className='cv-experience-item-info'><I18nText text='cv.data.experience.full-developer'/></span>
                            <span className='cv-experience-item-description'>Javascript, AngularJs, jQuery, HTML5, CSS3, Python, Django, NodeJs.</span>
                        </div>
                        <div className='cv-experience-item'>
                            <div className='cv-experience-item-title'><span> Atos </span><span>04/2014 - 03/2015</span></div>
                            <span className='cv-experience-item-info'><I18nText text='cv.data.experience.full-developer'/></span>
                            <span className='cv-experience-item-description'>Javascript, jQuery, HTML5, CSS3, Java, Groovy, Spring MVC, Hibernate.</span>
                        </div>
                    </div>
                )
            }
        ];

        return (
            <div className='it-container'>
                <h2>Currículum</h2>
                {this.renderSections(sections)}
                <CvDownload/>
            </div>
        );
    }
}
