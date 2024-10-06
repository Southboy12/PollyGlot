import React from "react"
import Home from "./pages/Home"
import Result from "./pages/Result"
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom"


export default function App() {
    // const navigate = useNavigate()

    // function toResultPage(event) {
    //     event.preventDefault()
    //     navigate("/result")
    // }

    // function toHomePage(event) {
    //     event.preventDefault()
    //     navigate("/")
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}