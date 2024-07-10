import React, { useEffect, useRef, useState } from 'react'
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
                <source src='https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4' type='video/mp4'></source>
            </video>

        </div>
    )
}

export default Video