import React from "react";
import Head from "../components/Head";
import ResultBottom from "../components/ResultBottom";
import { useNavigate, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom"

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { translation, original } = location.state || {
    translation: "No translation available.",
    original: "N/A",
  };

  function handleStartOver(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="container">
      <Head />
      <ResultBottom
        handleStartOver={handleStartOver}
        translation={translation}
        original={original}
      />
    </div>
  );
}
