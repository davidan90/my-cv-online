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
                    <h3>Desarrollador web</h3>
                    <div className='profile-description'>
                        <p>
                            Desarrollador web desde el 2014. Perfil frontend aunque también he trabajado como backend. He trabajado con distintas tecnologías, entre ellas Javascript, Typescript, Angular, React, Java y Python.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
