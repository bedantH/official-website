import React from 'react'

import "./ACard.css"

export default function ACard(props) {
    return (
        <section className="card-sec">
            <div className="card-about">
                <div className="icon-img">
                    <img alt="svg" src={`${props.img}.svg`} />
                </div>
                <div className="div">
                    <h1>{props.heading}</h1>
                    <div className="ab-desc">
                        <p className="desc-text">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
