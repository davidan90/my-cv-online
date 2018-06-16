import * as React from 'react';
import { ArrowNavigationProps } from './interfaces';
import './arrow-navigation.scss';

export const ArrowNavigationComponent = ({ link }: ArrowNavigationProps) => (link.href && link.direction) ?
    (
        <div className='dan-arrow-container'>
            <a className={`arrow arrow-${link.direction}`} href={link.href}></a>
        </div>
    ) : null;

export class ArrowNavigation extends React.Component<ArrowNavigationProps, {}> {
    public static defaultProps: Partial<ArrowNavigationProps> = {
        link: undefined
    };

    constructor(props: ArrowNavigationProps) {
        super(props);
    }

    render() {
        const { link } = this.props;
        return link ?
            <ArrowNavigationComponent {...{ link }} /> :
            null;
    }
}
