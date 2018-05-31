import * as React from 'react';
import './cv-download.scss';

export class CvDownload extends React.Component<{}, {}> {
    render() {
        return (
            <div className='cv-download-container'>
                <button>
                    <a href={require('../../assets/docs/pdfs/cv.pdf')} download='cv_david_alvarez_navarro'>
                        Descargar CV
                    </a>
                </button>
            </div>
        );
    }
}
