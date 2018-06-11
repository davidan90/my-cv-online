import * as React from 'react';

const links = [
    { title: 'Contacto', styleClass: 'contact', href: '#contact' },
    { title: 'Inicio', styleClass: 'home', href: '#home' },
    { title: 'Tecnologias', styleClass: 'skills', href: '#skills' },
    { title: 'Curriculum', styleClass: 'cv', href: '#cv' }
];

export const NavigationProvider = React.createContext(
    links
);
