import * as React from 'react';
import { ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class CvLayout extends React.Component<{}, {}> {
    render() {
        const upArrowProps: ArrowNavigationProps = { link: { href: '#home', direction: 'up', title: 'Inicio' } };

        return (
            <div id='cv' className='layout'>
                <div className='cv-container'>
                    <div className='arrow-container home-arrow-up'>
                        <ArrowNavigation {...upArrowProps} />
                    </div>
                    <div className='it-container'>
                        <h2>Currículum</h2>
                    </div>
                </div>
            </div>
        );
    }
}
