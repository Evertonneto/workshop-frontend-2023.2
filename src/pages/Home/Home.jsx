import React, { useContext, useEffect, useState } from 'react'
import starwarsIMGhome from '../../assets/imgs/star-wars-4.svg'
import './Home.css'
import HeaderAndBackground from '../../components/HeaderAndBackground/HeaderAndBackground'

const Home = () => {


    return (
        <div>
            <HeaderAndBackground />

            <div className='main flex flex-col justify-center items-center text-lg text-zinc-100 '>
                <img src={starwarsIMGhome} alt="Star Wars Logo" className='w-2/3 lg:w-1/3 mt-36' />
                <p className='mt-28 w-2/3 text-justify '>A saga Star Wars se passa em uma galáxia muito, muito distante, trazendo o conflito épico entre os Jedi e os Sith. Além de batalhas espaciais, a franquia tem personagens memoráveis, como Luke Skywalker, Darth Vader e a Princesa Leia, sendo um marco na cultura pop.</p>
            </div>
        </div>

    )
}

export default Home