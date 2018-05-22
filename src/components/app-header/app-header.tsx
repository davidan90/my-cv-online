import * as React from 'react';
import { NavigationContext } from '../../contexts';
import { TetrisNavigation, TetrisLink } from '../tetris-navigation';
import './app-header.scss';

export const AppHeader = () => (
    <NavigationContext.Consumer>
        {
            (links: Array<TetrisLink>) => (
                <header>
                    <TetrisNavigation {...{ links }} />
                </header>
            )
        }
    </NavigationContext.Consumer>
);
