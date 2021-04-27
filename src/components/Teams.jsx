import React from 'react'
import PeopleIcon from '@material-ui/icons/People';
import "./Teams.css";
import TCard from "./TCard";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Teams() {
    return (
        <section className="teams-layout">
            <div className="asset">
                <img src="./asset-c.svg" alt="ok" />
            </div>
            <div className="asset">
                <img src="./assetc1.svg" alt="ok" />
            </div>
            <div className="asset">
                <img src="./assetc1.svg" alt="ok" />
            </div>
            <div className="asset">
                <img src="./asset-c.svg" alt="ok" />
            </div>
            <div className="asset">
                <img src="./asset-c.svg" alt="ok" />
            </div>
            <div className="asset">
                <img src="./assets1.svg" alt="ok" />
            </div>
            <div className="layout">
                <div className="box">
                    <div className="icon-heading">
                        <PeopleIcon className="icon-info" />
                        <h1>TEAMS</h1>
                    </div>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="team-cards">
                                <TCard avatar="https://avatars.githubusercontent.com/u/38172685?v=4" heading="CHINMAY MULAY" img="arrow-bold-top" text="Community Lead" text1="Miles to go before I sleep." linkedin="https://www.linkedin.com/in/cmulay17/" twitter="https://twitter.com/cmulay17?s=09" github="https://github.com/cmulay" />
                                <TCard avatar="https://avatars.githubusercontent.com/u/67738204?v=4" heading="DAVE BHANDARI" img="connect" text="Android Lead" text1="Student | Self Taught Developer" linkedin="https://linkedin.com/in/dave-bhandari-4a74761a7/" twitter="https://twitter.com/dave_bhandari" github="https://github.com/Davekibh" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="team-cards">
                                <TCard avatar="https://avatars.githubusercontent.com/u/64542454?v=4" heading="BEDANT HOTA" text="Web Lead" text1="Quite a Nerd, but knows how to code.:)" linkedin="https://www.linkedin.com/in/bedant-hota-99a5371a5/" twitter="https://twitter.com/BedantHota" github="https://github.com/bedantH" />
                                <TCard avatar="https://avatars.githubusercontent.com/u/72993471?v=4" heading="PRATHAM YADAV" text="Web Co-Lead" text1="Student | Developer" linkedin="https://www.linkedin.com/in/pratham-yadav-0612531ba/" twitter="https://twitter.com/Pratham06697358" github="https://github.com/ypratham" />
                            </div>
                        </div>
                    </div>
                    <button style={{ color: "#B97CF0" }} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <ArrowBackIosIcon />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button style={{ color: "#B97CF0" }} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <ArrowForwardIosIcon />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
