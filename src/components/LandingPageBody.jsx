import React from 'react'
import './LandingPageBody.css'

import GitHubIcon from '@material-ui/icons/GitHub';

export default function Body() {
    return (
        <main className="main-body">
            <section className="tagline-sec">
                <div className="tagline">
                    <h1>
                        <span className="grow-connect" > GROW. CONNECT. COLLABORATE. </span></h1>
                </div>
                <div className="github-btn-sec">
                    <button className="github-btn">
                        <a href="https://github.com/PH-DC">
                            <span className="github-txt"> GITHUB </span> <GitHubIcon />
                        </a>
                    </button>
                </div>
            </section>

            <section className="svg-img">
                <img className="vector-image" src="./landing-img.svg" alt="vector_image" />
            </section>
        </main>
    )
}
