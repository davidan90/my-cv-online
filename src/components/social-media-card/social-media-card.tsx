import * as React from 'react';
import { SocialMediaProps } from './interfaces';
import './social-media-card.scss';

export const SocialMediaComponent = ({ logo, href, userName }: SocialMediaProps) => (
    <div className='contact'>
        <a className={`logo-container ${logo}`} href={href} target='_blank'>
            <div className={`social-logo ${logo}`}></div>
        </a>
        <span>
            <a href={href} target='_blank'>{`@${userName}`}</a>
        </span>
    </div>
);

export class SocialMediaCard extends React.Component<SocialMediaProps, {}> {
    public static defaultProps: Partial<SocialMediaProps> = {
        logo: undefined
    };

    constructor(props: SocialMediaProps) {
        super(props);
    }

    render() {
        return this.props.logo ? <SocialMediaComponent {...this.props}/> : null;
    }
}
