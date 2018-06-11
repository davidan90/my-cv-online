import * as React from 'react';
import { NavigationProvider } from '../../providers';
import { TetrisNavigation, TetrisLink } from '../tetris-navigation';
import './app-header.scss';

export const AppHeader = () => (
    <NavigationProvider.Consumer>
        {
            (links: Array<TetrisLink>) => (
                <header>
                    <TetrisNavigation {...{ links }} />
                </header>
            )
        }
    </NavigationProvider.Consumer>
);
