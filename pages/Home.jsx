import React, { useState } from "react"
import Head from "../components/Head"
import Bottom from "../components/Bottom"
import { useNavigate } from "react-router-dom"
import { OpenAI } from "../node_modules/openai"


const openApiKey = import.meta.env.VITE_OPENAI_API_KEY



export default function Home() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        wordToTranslate: "",
        language: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    async function translateText(data) {
        const messages = [
            {
                role: "system",
                content: `Act as a language translation expert. Translate the following word or sentence into ${formData.language}`
            },
            {
                role: "user",
                content: data
            }
        ]

        try {
            const openai = new OpenAI({
                apiKey: openApiKey,
                dangerouslyAllowBrowser: true
            })
            const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: messages
            })            
            navigate("/result", { state: {translation: response.choices[0].message.content, original: formData.wordToTranslate } })

        } catch (err) {
            console.log('Error:', err);
        }
        
    }

    // function toResultPage(event) {
    //     event.preventDefault()
    //     navigate("/result")        
    // }

    function handleTranslate(event) {
        event.preventDefault()
        translateText(formData.wordToTranslate)        
    }

    // function renderTranslation(output) {
    //     const outputArea = document.querySelector(".output--panel")
    //     const translate = document.createElement('p')
    //     outputArea.appendChild(translate)
    //     translate.textContent = output
    //     outputArea.style.display = "flex"
         
    // }
    

    return (
        <div className="container">
            <Head />
            <Bottom formData={formData} handleChange={handleChange} handleTranslate={handleTranslate} />
        </div>
    )
}