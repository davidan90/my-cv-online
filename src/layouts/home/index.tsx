import * as React from 'react';
import { ProfileCard, ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class HomeLayout extends React.Component<{}, {}> {
    render() {
        const rightArrowProps: ArrowNavigationProps = { link: { href: '#skills', direction: 'right', title: 'sections.tech' } };
        const leftArrowProps: ArrowNavigationProps = { link: { href: '#contact', direction: 'left', title: 'sections.social' } };
        const downArrowProps: ArrowNavigationProps = { link: { href: '#cv', direction: 'down', title: 'sections.cv' } };

        return (
            <section id='home' className='layout'>
                <div className='home-container'>
                    <div className='arrow-container skills-arrow-right'>
                        <ArrowNavigation {...rightArrowProps} />
                    </div>
                    <div className='profile-card-container'>
                        <ProfileCard />
                    </div>
                    <div className='arrow-container contact-arrow-left'>
                        <ArrowNavigation {...leftArrowProps} />
                    </div>
                    <div className='arrow-container cv-arrow-down'>
                        <ArrowNavigation {...downArrowProps} />
                    </div>
                </div>
            </section>
        );
    }
}
