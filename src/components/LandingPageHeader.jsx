import React from 'react'
import './LandingPageHeader.css'

export default function Home() {
    return (
        <header className="top-header">
            <ul className="header-list">
                <div className="left-sec">
                    {/* Header Section Logo and Org Name */}
                    <div className="left-sec-content">
                        <section className="logo-name">
                            <li className="logo">
                                <img src="./images/2.png" className="logo-img" alt="" />
                            </li>
                            <li className="org-name">PDC</li>
                        </section>

                        <div className="divide-line">
                            {/* This is an empty section to create an line between the above and below section */}
                        </div>
                        {/* Events and Blogs section */}
                        <section className="events-blog">
                            <li className="events-link"> <a href="notfound.html">EVENTS</a> </li>
                            <li className="blogs-link"> <a href="notfound.html">BLOGS</a> </li>
                        </section>
                    </div>
                </div>

                <div className="join-sec">
                    <li className="join-li"> <button className="join-btn"> <a href="#footer" className="join-btn-link">JOIN</a> </button> </li>
                </div>
            </ul>
        </header>
    )
}
