import React, { useEffect, useRef } from 'react'
import './Video.css'

const Video = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.autoplay = true
        }
    })


    return (
        <div className='video-container'>
            <video ref={videoRef} loop muted >
                <source src="https://player.vimeo.com/external/353456727.sd.mp4?s=d61b94f1e16c4d53d9d229042b384c7e4988f16b&profile_id=164&oauth2_token_id=57447761" type='video/mp4'></source>
            </video>

        </div>
    )
}

export default Video