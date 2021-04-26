import React from 'react'

// component imports
import './footerSection1.css'

export default function footerSec() {
    return (
        <footer id="footer">
            <section className="footer-layout-top">
                <div className="join-t-com">
                    <h1>JOIN THE COMMUNITY </h1>
                </div>
                <div className="btns-sec">
                    <a href="https://github.com/PH-DC" >
                        <button className="github-f-btn">
                            GITHUB
                            <img src="./images/GitHubLogo.png" alt="github_logo" className="github-f-logo" />
                        </button>
                    </a>

                    <a href="https://discord.gg/AY5eaRxMrt" >
                        <button className="discord-btn">
                            DISCORD
                            <img src="./images/discordLogo.png" alt="discord_logo" className="discord-logo" />
                        </button>
                    </a>
                </div>
            </section>
        </footer>
    )
}
