import React from "react";
import France from "../assets/fr-flag.png";
import Japan from "../assets/jpn-flag.png";
import Spain from "../assets/sp-flag.png";

export default function Bottom(props) { 
  return (
    <main className="bottom">
      <form className="form" onSubmit={props.handleTranslate}>
        <h2>Text to translate</h2>

        <textarea
          name="wordToTranslate"
          placeholder="How are you?"
          value={props.formData.wordToTranslate}
          onChange={props.handleChange}
        />

        <h2>Select a language</h2>

        <label htmlFor="french">
          <input
            type="radio"
            id="french"
            name="language"
            value="french"
            checked={props.formData.language === "french"}
            onChange={props.handleChange}
          />
          French
          <img src={France} />
        </label>
        <br />

        <label htmlFor="">
          <input
            type="radio"
            id="spanish"
            name="language"
            value="spanish"
            checked={props.formData.language === "spanish"}
            onChange={props.handleChange}
          />
          Spanish
          <img src={Spain} />
        </label>
        <br />

        <label htmlFor="">
          <input
            type="radio"
            id="Japanese"
            name="language"
            value="japanese"
            checked={props.formData.language === "japanese"}
            onChange={props.handleChange}
          />
          Japanese
          <img src={Japan} />
        </label>
        <br />

        <button>Translate</button>
      </form>
    </main>
  );
}
