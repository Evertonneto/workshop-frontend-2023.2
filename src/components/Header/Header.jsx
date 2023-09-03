import React from 'react'
import './Header.css'
import StarwarsIMG from '../../assets/imgs/star-wars.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className=' bg-gray-200'>
            <header className='flex justify-between items-center p-10'>
                <img src={StarwarsIMG} alt="Logo Star Wars " className='h-28 shadow-lg imgHeader' />
                <nav className='flex'>
                    <Link to={`/`}>
                        <p >ínicio</p>

                    </Link>

                    <Link to={`/galeria`}>
                        <p>Galeria</p>
                    </Link>



                </nav>
            </header >
        </div >
    )
}

export default Header