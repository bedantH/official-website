import React from 'react'
import './LandingPageBody.css'

import GitHubIcon from '@material-ui/icons/GitHub';

export default function Body() {
    return (
        <main className="main-body">
            <section className="tagline-sec">
                <div className="tagline">
                    <p>
                        <span className="grow-connect" >PDC is an university based community group for students interested in computer technology.
                        Students from any undergraduate or graduate programs with an interest in growing as a developer can join.</span></p>
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
