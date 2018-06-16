import * as React from 'react';

const es = require('./data/es.json');
const en = require('./data/en.json');

export const I18nContext = React.createContext({});

export class I18nProvider extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            lang: 'es',
            data: es,
            setLanguage: (lang: string) => {
                this.setState(state => ({
                    lang,
                    data: this.getLanguageJSON(lang)
                }));
            }
        };
    }

    getLanguageJSON(language: string) {
        let lang;
        switch (language) {
            case 'es':
                lang = es;
                break;
            case 'en':
                lang = en;
                break;
            default:
                lang = es;
                break;
        }
        return lang;
    }

    render() {
        return (
            <I18nContext.Provider value={this.state}>
                {this.props.children}
            </I18nContext.Provider>
        );
    }
}
