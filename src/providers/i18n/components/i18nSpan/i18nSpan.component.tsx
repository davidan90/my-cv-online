import * as React from 'react';
import { I18nContext } from '../../i18n.provider';
import { I18n } from '../../interface';

const translate = (data: object, ref: string): string => {
    let result: any = data;
    ref.split('.')
        .forEach((key: string) => {
            result = result[key];
            if (!result) {
                return;
            }
        });
    return result ? result : ref;
};

export const I18nSpan = ({text}: I18n) => {
    return text ? (
        <I18nContext.Consumer>
            {
                (context: any) => context.data ? (
                    <span style={{
                        margin: 0
                    }}>
                        {translate(context.data, text)}
                    </span>
                ) : null
            }
        </I18nContext.Consumer>
    ) : null;
};
