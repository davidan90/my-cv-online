import * as React from 'react';
import { NavigationProvider } from '../../providers';
import { TetrisNavigation, TetrisLink } from '../tetris-navigation';
import { I18nSelector } from '../../providers/i18n';
import './app-header.scss';

export const AppHeader = () => (
    <NavigationProvider.Consumer>
        {
            (links: Array<TetrisLink>) => (
                <header>
                    <TetrisNavigation {...{ links }} />
                    <div className='i18n-select-container'>
                        <I18nSelector/>
                    </div>
                </header>
            )
        }
    </NavigationProvider.Consumer>
);
