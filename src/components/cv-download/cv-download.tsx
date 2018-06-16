import * as React from 'react';
import { I18nText, I18nContext } from '../../providers';
import './cv-download.scss';

export class CvDownload extends React.Component<{}, {}> {
    render() {
        return (
            <div className='cv-download-container'>
                <button>
                    <I18nContext.Consumer>
                        {
                            (context: any) => context.lang ? (
                                <a href={require(`../../assets/docs/pdfs/${ context.lang === 'es' ? 'cv' : 'cv_eng'}.pdf`)} download='cv_david_alvarez_navarro'>
                                    <I18nText text='cv.label.download' />
                                </a>
                            ) : null
                        }
                    </I18nContext.Consumer>
                </button>
            </div>
        );
    }
}
