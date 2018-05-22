import * as React from 'react';
import { HomeLayout, ContactLayout, SkillsLayout, CvLayout } from './layouts';
import { TetrisNavigation } from './components';

import './app.scss';

const links = [
    { title: 'Contacto', styleClass: 'contact', href: '#contact-layout' },
    { title: 'Inicio', styleClass: 'home', href: '#home-layout' },
    { title: 'Tecnologias', styleClass: 'skills', href: '#skills-layout' },
    { title: 'Curriculum', styleClass: 'cv', href: '#cv-layout' }
];

export const App = () => (
    <div className='dan-app-container'>
        <header>
            <TetrisNavigation {...{links}}/>
        </header>
        <ContactLayout />
        <HomeLayout />
        <SkillsLayout />
        <CvLayout />
    </div>
);
