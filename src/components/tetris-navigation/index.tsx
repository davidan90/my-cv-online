import * as React from 'react';
import './index.scss';

export const TetrisNavigation = () => (
    <nav className='dan-navigation'>
        <ol>
            <li className='panel contact'><a href='#contact-layout' title='Contacto'></a></li>
            <li className='panel home'><a href='#home-layout' title='Inicio'></a></li>
            <li className='panel skills'><a href='#skills-layout' title='Tecnologias'></a></li>
            <li className='panel cv'><a href='#cv-layout' title='Curriculum'></a></li>
        </ol>
    </nav>
);
