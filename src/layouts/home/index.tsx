import * as React from 'react';
import { ProfileCard } from '../../components';
import './index.scss';

export class HomeLayout extends React.Component<{}, {}> {
    render() {
        return (
            <div id='home-layout' className='layout'>
                <div className='home-container'>
                    <ProfileCard />
                </div>
            </div>
        );
    }
}
