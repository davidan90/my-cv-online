import * as React from 'react';
import './index.scss';

export default class ContactLayout extends React.Component<{}, {}> {
    render() {
        return (
            <div id='contact-layout' className='layout'>
                <div className='container'>
                    <div className='contact contact-twitter'>
                        <p>twitter</p>
                    </div>
                    <div className='contact contact-github'>
                        <p>github</p>
                    </div>
                </div>
            </div>
        );
    }
}
