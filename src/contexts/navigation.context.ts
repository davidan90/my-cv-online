import * as React from 'react';

const links = [
    { title: 'Contacto', styleClass: 'contact', href: '#contact-layout' },
    { title: 'Inicio', styleClass: 'home', href: '#home-layout' },
    { title: 'Tecnologias', styleClass: 'skills', href: '#skills-layout' },
    { title: 'Curriculum', styleClass: 'cv', href: '#cv-layout' }
];

export const NavigationContext = React.createContext(
    links
);
