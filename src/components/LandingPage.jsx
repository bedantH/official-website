import React from 'react'
import LandHeader from './LandingPageHeader'
import LandBody from './LandingPageBody'

export default function LandingPage() {
    return (
        <div>
            <section className="landingPage-layout">
                <LandHeader/>
                <LandBody/>
            </section>
        </div>
    )
}
