import React from 'react'

// import icons
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// import css
import "./AboutUs.css"

// import components
import ACard from "./ACard";

export default function AboutUs() {
    return (
        <main className="about-us-layout">
            <div className="asset">
                <img src="./asset-c.svg" alt=".." />
            </div>
            <div className="asset">
                <img src="./assetc1.svg" alt=".." />
            </div>
            <div className="asset">
                <img src="./asset-c.svg" alt=".." />
            </div>
            <div className="asset">
                <img src="./asset-c.svg" alt=".." />
            </div>
            <div className="asset">
                <img src="./assetc1.svg" alt=".." />
            </div>
            <section className="about-header">
                <div className="icon-heading">
                    <InfoOutlinedIcon className="icon-info" />
                    <h1>ABOUT US</h1>
                    <p>
                        
                    </p>
                    <p>
                        We aim in growing knowledge in a peer-to-peer learning environment and build solutions for local businesses and  community.
                    </p>
                </div>
                <div className="about-cards">
                    <ACard heading="CONNECT" img="connect" text="Meet developers and tech enthusiats and advance yourself." />
                    <ACard heading="COLLABORATE" img="collabrate" text="Work on real world projects with other members. Experience how it feels to work as a team." />
                    <ACard heading="GROW" img="arrow-bold-top" text="Apply your skills to build awesome products and advance them. And also help others improve as well" />

                </div>
            </section>
        </main>
    )
}
