import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./TCard.css";

export default function TCard(props) {
    return (
        <section className="card-sec">
            <div className="card-teams">
                <div className="team-member-img">
                    <img alt="teams" src={props.avatar} />
                </div>
                <div className="mem-div">
                    <h1>{props.heading}</h1>
                    <div className="team-desc">
                        <p className="desc-mem-text">
                            {props.text}
                        </p>
                        <p className="desc-mem-text1">
                            {props.text1}
                        </p>
                    </div>
                    <div className="social-icons">
                        <a className="linkedin" href={props.linkedin}><LinkedInIcon /></a>
                        <a className="twitter" href={props.twitter}><TwitterIcon /></a>
                        <a className="github" href={props.github}><GitHubIcon /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
