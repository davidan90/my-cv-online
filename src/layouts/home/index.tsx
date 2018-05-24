import * as React from 'react';
import { ProfileCard, ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class HomeLayout extends React.Component<{}, {}> {
    render() {
        const rightArrowProps: ArrowNavigationProps = { link: { href: '#skills', direction: 'right', title: 'Tecnologias' } };
        const leftArrowProps: ArrowNavigationProps = { link: { href: '#contact', direction: 'left', title: 'Contacto' } };
        const downArrowProps: ArrowNavigationProps = { link: { href: '#cv', direction: 'down', title: 'Curriculum' } };

        return (
            <section id='home' className='layout'>
                <div className='home-container'>
                    <div className='arrow-container skills-arrow-right'>
                        <ArrowNavigation {...rightArrowProps} />
                    </div>
                    <ProfileCard />
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
