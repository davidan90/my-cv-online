import * as React from 'react';
import { Cv, ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class CvLayout extends React.Component<{}, {}> {
    render() {
        const upArrowProps: ArrowNavigationProps = { link: { href: '#home', direction: 'up', title: 'sections.home' } };

        return (
            <section id='cv' className='layout'>
                <div className='cv-container'>
                    <div className='arrow-container home-arrow-up'>
                        <ArrowNavigation {...upArrowProps} />
                    </div>
                    <Cv />
                </div>
            </section>
        );
    }
}
