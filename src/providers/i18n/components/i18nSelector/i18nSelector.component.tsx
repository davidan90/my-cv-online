import * as React from 'react';
import { I18nContext } from '../../i18n.provider';
import { I18nText } from '../../components';

export const I18nSelector = () => {
    return (
        <I18nContext.Consumer>
            {
                (context: any) => context.data ? (
                    <select onChange={event => context.setLanguage(event.target.value)}>
                        <option value='es'><I18nText text='languages.es'/></option>
                        <option value='en'><I18nText text='languages.en'/></option>
                    </select>
                ) : null
            }
        </I18nContext.Consumer>
    );
};
