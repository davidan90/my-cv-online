import * as React from 'react';
import { HomeLayout, ContactLayout, SkillsLayout, CvLayout } from './layouts';
import { TetrisNavigation } from './components';

import './app.scss';

export const App = () => (
    <div className='dan-app-container'>
        <header>
            <TetrisNavigation />
        </header>
        <ContactLayout />
        <HomeLayout />
        <SkillsLayout />
        <CvLayout />
    </div>
);
