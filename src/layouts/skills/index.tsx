import * as React from 'react';
import { ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class SkillsLayout extends React.Component<{}, {}> {
    render() {
        const leftArrowProps: ArrowNavigationProps = { link: { href: '#home', direction: 'left', title: 'Inicio' } };

        return (
            <div id='skills' className='layout'>
                <div className='skills-container'>
                    <div className='arrow-container home-arrow-left'>
                        <ArrowNavigation {...leftArrowProps} />
                    </div>
                    <div className='it-container'>
                        <h2>Tecnologías</h2>
                    </div>
                </div>
            </div>
        );
    }
}
