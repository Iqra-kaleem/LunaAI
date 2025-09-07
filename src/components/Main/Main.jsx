import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { generateGeminiResponse } from '../../config/api'
import { Context } from '../../context/appContext'

const Main = () => {

    const { prompt, setPrompt, response, setResponse } = useContext(Context);

    const { recentprompt, setrecentprompt, showresult, setshowresult, loading, setloading, } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setResponse("")
        setloading(true);
        setshowresult(true)
        setrecentprompt(prompt)
        const response = await generateGeminiResponse(prompt);
        console.log(response);
        setResponse(response);
        setloading(false);
        setPrompt("");
    };



    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img width="40px" src={assets.user_image1} alt="" />
            </div>


            <div className="main-conatiner">

                {!showresult
                    ? <>
                        <div className="greet">
                            <p><span>Hello! Dev</span></p>
                            <p>What's on your mind today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Improve the readibility of the following code </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img width="40px" src={assets.user_image1} alt="" />
                            <p>{recentprompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                            <div className="loader">
                               <hr />
                               <hr />
                               <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{ __html: response }}></p>
                            }
                            
                        </div>
                    </div>
                }




                <div className="main-bottom">
                    <form onSubmit={handleSubmit}>
                        <div className="search-box">
                            <input type='text' placeholder='Enter prompt here' value={prompt}
                                onChange={(e) => setPrompt(e.target.value)} />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <button type='submit'><img src={assets.send_icon} alt="" /></button>
                            </div>
                        </div>
                    </form>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info , including about people
                        , so double-checck its responses. Your privacy and Gemini Apps
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main
