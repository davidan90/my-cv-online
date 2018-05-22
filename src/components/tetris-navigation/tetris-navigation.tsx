import * as React from 'react';
import { TetrisLink, TetrisNavigationProps } from './interfaces';
import './tetris-navigation.scss';

export const TetrisNavigationComponent = ({ links }: TetrisNavigationProps) => (
    <nav className='dan-navigation'>
        <ol>
            {
                links.map((link: TetrisLink, index: number) => (
                    <li key={`tetris-navigation-${index}`} className={`panel ${link.styleClass}`}>
                        <a href={link.href} title={link.title}></a>
                    </li>)
                )
            }
        </ol>
    </nav>
);

export class TetrisNavigation extends React.Component<TetrisNavigationProps, {}> {
    public static defaultProps: Partial<TetrisNavigationProps> = {
        links: []
    };

    constructor(props: TetrisNavigationProps) {
        super(props);
    }

    render() {
        const { links } = this.props;
        return (
            <TetrisNavigationComponent {...{links}} />
        );
    }
}
