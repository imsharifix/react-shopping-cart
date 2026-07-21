import { Fragment } from 'react'

import './footer.css'

// import icons from 'react-icons'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function footer() {
    return (
        <>
            <footer className="footer">
                <h2 className="footer__title">The gererics</h2>
                <TiSocialInstagram className="footer__icon" />
                <TiSocialLinkedin className="footer__icon" />
                <TiSocialSkype className="footer__icon" />
                <TiSocialYoutube className="footer__icon" />
            </footer>
        </>
    )
}

export default footer