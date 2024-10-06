import React from "react"
import parrot from "../assets/parrot.png"


export default function Head() {
    return (
        <main className="top">
            <div className="top--img">
                <img src={parrot} alt="Worldmap"/>
            </div>
            <div className="top--text">
                <h1>PollyGlot</h1>
                <p>Perfect Translation Every Time</p>
            </div>
        </main>
    )
}