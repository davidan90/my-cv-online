import * as React from 'react';
import { HomeLayout, ContactLayout, SkillsLayout, CvLayout } from './layouts';
import { AppHeader } from './components';
import './app.scss';

export class App extends React.Component<{}, {start: boolean}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            start: false
        };
    }

    renderApp = (start: boolean) => start ? (
        <div className='dan-app-container'>
            <AppHeader />
            <React.Fragment>
                <ContactLayout />
                <HomeLayout />
                <SkillsLayout />
                <CvLayout />
            </React.Fragment>
        </div>
    ) : null

    render() {
        const { start } = this.state;
        return (
            <React.Fragment>
                <a
                    className={`start-backdrop${start ? ' hide' : ''}`}
                    href='#home'
                    onClick={() => this.setState({start: true})}>
                    <span>Comenzar</span>
                </a>
                {this.renderApp(start)}
            </React.Fragment>
        );
    }
}
