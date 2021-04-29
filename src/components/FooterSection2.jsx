import React from 'react'

// importing css
import './footerSection1.css'
import './FooterSection2.css'

export default function FooterSection2() {
    return (
        <div className="footer-layout">
            <section className="footer-layout-top">
                <div className="join-the-com">
                    <h1>JOIN THE COMMUNITY </h1>
                </div>
                <div className="btns-sec">
                    <a href="https://github.com/PH-DC" target="_blank" rel="noopener noreferrer">
                        <button className="github-f-btn">
                            GITHUB
                            <img src="./images/GitHubLogo.png" alt="github_logo" className="github-f-logo" />
                        </button>
                    </a>

                    <a href="https://discord.gg/AY5eaRxMrt" target="_blank" rel="noopener noreferrer">
                        <button className="discord-btn">
                            DISCORD
                            <img src="./images/discordLogo.png" alt="discord_logo" className="discord-logo" />
                        </button>
                    </a>
                </div>
            </section>
        <section id="footer-btm" className="bottom-ftr">
            <div className="footer-bottom-layout">
                <div className="left">
                    <div className="made-with-section">
                        <h1 className="made-with-love">Made with ❤️ by PDC</h1>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="https://twitter.com/PDC58521207" target="_blank" rel="noopener noreferrer">
                        <img src="./images/TwitterLogo.png" alt="twitter_logo" />
                    </a>
                    <a href="https://www.instagram.com/pillai_dc/" target="_blank" rel="noopener noreferrer">
                        <img src="./images/InstagramLogo.png" alt="instagram_logo" />
                    </a>
                    <a href="https://www.facebook.com/pillai.dev.7" target="_blank" rel="noopener noreferrer">
                        <img src="./images/FacebookLogo.png" alt="facebook_logo" />
                    </a>

                </div>
            </div>
        </section>
        </div>
    )
}
