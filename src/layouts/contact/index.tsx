import * as React from 'react';
import { SocialMediaCard, SocialMediaProps, ArrowNavigation, ArrowNavigationProps } from '../../components';
import './index.scss';

export class ContactLayout extends React.Component<{}, {}> {

    renderSocialMediaCards = (cards: Array<SocialMediaProps>) => (
        <div className='contact-container'>
            {
                cards.map((card, index) => {
                    const { logo, href, userName } = card;
                    return <SocialMediaCard
                        key={`social-media-card-${index}`}
                        {...{ logo, href, userName }}
                    />;
                })
            }
        </div>
    )

    render() {
        const rightArrowProps: ArrowNavigationProps = { link: { href: '#home', direction: 'right', title: 'Contacto' } };
        const socialMediaCards: Array<SocialMediaProps> = [
            { logo: 'twitter', href: 'https://twitter.com/whiletrueloop', userName: 'whiletrueloop' },
            { logo: 'github', href: 'https://github.com/davidan90', userName: 'davidan90' }
        ];

        return (
            <div id='contact' className='layout'>
                {this.renderSocialMediaCards(socialMediaCards)}
                <div className='contact-arrow-right-container'>
                    <ArrowNavigation {...rightArrowProps} />
                </div>
            </div>
        );
    }
}
