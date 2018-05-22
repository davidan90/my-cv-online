import * as React from 'react';
import { HomeLayout, ContactLayout, SkillsLayout, CvLayout } from './layouts';
import { AppHeader } from './components';
import './app.scss';

export const App = () => (
    <div className='dan-app-container'>
        <AppHeader />
        <React.Fragment>
            <ContactLayout />
            <HomeLayout />
            <SkillsLayout />
            <CvLayout />
        </React.Fragment>
    </div>
);
