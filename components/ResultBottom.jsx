import React from "react"
import France from "../assets/fr-flag.png"
import Japan from "../assets/jpn-flag.png"
import Spain from "../assets/sp-flag.png"

export default function ResultBottom(props) {
    return (
        <main className="bottom">
            <form className="form" onSubmit={props.handleStartOver}>
                <h2>Original text</h2>

                <textarea value={props.original} readOnly />

                <h2>Your translation</h2>

                <textarea value={props.translation} readOnly />

                <button>Start Over</button>
            </form>
        </main>
    )
}