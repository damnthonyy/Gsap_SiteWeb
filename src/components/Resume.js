import React from 'react';
import App from '../App.css';



function Resume() {

    const Style = {
        border: '1px solid var(--color-grey-light)',
        padding: '17px 44px',
        backgroundColor: 'var(--background-color-light)',
        color: 'var(--text-color-dark)',
        cursor: 'pointer',

    }

    const pdfPath = '/Cv.pdf';






    return (
        <div>
            <a href={pdfPath} download="CvPdf">
                <button style={Style} className='CtaResume' >
                    <span className='Save'> Download my resume !</span>
                </button>
            </a>
        </div>
    )
}

export default Resume