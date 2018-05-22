import * as React from 'react';
import { SocialMediaCard, SocialMediaProps } from '../../components';
import './index.scss';

const socialMediaCards: Array<SocialMediaProps> = [
    { logo: 'twitter', href: 'https://twitter.com/whiletrueloop', userName: 'whiletrueloop' },
    { logo: 'github', href: 'https://github.com/davidan90', userName: 'davidan90' }
];

export class ContactLayout extends React.Component<{}, {}> {
    render() {
        return (
            <div id='contact-layout' className='layout'>
                <div className='container'>
                    {
                        socialMediaCards.map((card, index) => {
                            const { logo, href, userName } = card;
                            return <SocialMediaCard
                                        key={`social-media-card-${index}`}
                                        {...{ logo, href, userName }}
                                    />;
                        })
                    }
                </div>
            </div>
        );
    }
}
