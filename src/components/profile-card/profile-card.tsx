import * as React from 'react';
import { I18nText } from '../../providers';
import './profile-card.scss';

export class ProfileCard extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className='profile-container'>
                <div className='profile-img'></div>
                <div className='profile-info'>
                    <h1>David Álvarez Navarro</h1>
                    <h3><I18nText text='home.profile'/></h3>
                    <div className='profile-description'>
                        <p>
                            <I18nText text='home.about'/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
