import React from 'react'

// importing css
import './FooterSection2.css'

export default function FooterSection2() {
    return (
        <section id="footer-btm" className="bottom-ftr">
            <div className="footer-bottom-layout">
                <div className="left">
                    <div className="made-with-section">
                        <h1 className="made-with-love">Made with ❤️ by PDC</h1>
                    </div>
                    <div className="divide">

                    </div>
                    <div className="contribute">
                        <p>Contribute to our <a className="contri-link" href="https://github.com/PH-DC">GitHub</a></p>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="http://">
                        <img src="./images/TwitterLogo.png" alt="twitter_logo" />
                    </a>
                    <a href="http://">
                        <img src="./images/InstagramLogo.png" alt="instagram_logo" />
                    </a>
                    <a href="http://">
                        <img src="./images/FacebookLogo.png" alt="facebook_logo" />
                    </a>
                </div>
            </div>
        </section>
    )
}
