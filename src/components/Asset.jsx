import React from 'react'
import './Asset.css'

export default function Asset() {
    return (
        <div>
            {/* nth-child(1) */}
            <div className="assets"> 
                <img src="./images/circle-size-1.png" alt="circle-1" />
            </div>
            {/* nth-child(2) */}
            <div className="assets">
                <img src="./images/circle-size-2.png" alt="circle-2" />
            </div>
            {/* nth-child(3) */}
            <div className="assets">
                <img src="./images/circle-size-1.png" alt="" />
            </div>
            {/* nth-child(4) */}
            <div className="assets">
                <img src="./images/circle-size-1.png" alt="" />
            </div>
            {/* nth-child(5) */}
            <div className="assets">
                <img src="./images/circle-size-2.png" alt="" />
            </div>
            {/* nth-child(6) */}
            <div className="assets">
                <img src="./images/circle-size-1.png" alt="" />
            </div>
        </div>
    )
}
