import * as React from 'react';

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
                    <h3>Web Developer</h3>
                    <div className='profile-description'>
                        <p>
                            Until this battle station is fully operational we are vulnerable. The Rebel Alliance is too well equipped. They're more dangerous than you realize. Dangerous to your starfleet, Commander, not to this battle station! The Rebellion will continue to gain a support in the Imperial Senate as long as.... The Imperial Senate will no longer be of any concern to us.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
