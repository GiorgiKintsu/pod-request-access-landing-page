import { useState } from 'react';
import './Acces.css'

function Acces(){
    const[emailInput, setEmailInput] = useState("")

    let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const inputHandler = (e) => {
        setEmailInput(e.target.value);
    }

    const submitHandler = (e) => {
        !emailRegex.test(emailInput) && (e.preventDefault(), setEmailInput("error"));        
    }


    return(
        <div className='accesWrapper'>
            <h1 className='title'>Publish your podcasts <span>everywhere.</span></h1>
            <p className='instruction'>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
            <form className="inputField" onSubmit={submitHandler}>
                <input type="text" placeholder='Email address' onChange={inputHandler}/>
                <button type='submit' >request acces</button>
            </form>
            {emailInput === "error" && <span className='error'>Oops! Please check your email</span>}
            <div className='partners'>
                <img src="./partners-logos/spotify.svg" alt="spotify-log" />
                <img src="./partners-logos/apple-podcasts.svg" alt="apple-log" />
                <img src="./partners-logos/google-podcasts.svg" alt="google-podcasts-log" />
                <img src="./partners-logos/pocket-casts.svg" alt="pocket-casts-log" />
            </div>
        </div>
    )
}
export default Acces