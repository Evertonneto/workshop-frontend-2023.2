import React, { useState, useEffect } from 'react'
import './Galeria.css'
import HeaderAndBackground from '../../components/HeaderAndBackground/HeaderAndBackground'
import Carregamento from '../../components/Carregamento/Carregamento'


const Galeria = () => {
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/ ")
            .then(res => res.json())
            .then(data => {
                setDados(data.results)
                setCarregando(false)
            }).catch((error) => console.log(error))

    }, [])


    return (
        <div>
            <HeaderAndBackground />
            {carregando ? <Carregamento /> :


                <div className='containerGaleria'>
                    <h1 className='text-stone-50'>Galeria de Personagens</h1>
                    <div className='cards max-w-[900px] overflow-y-scroll' >
                        {dados.map((dado) => {
                            return (

                                <div className="card text-slate-50 p-10 bg-slate-400 m-4 rounded-lg w-[200px]
                        hover:scale-110 duration-150  min-h-[230px]" key={dado.created}>
                                    <h2 className='shadow-lg' >{dado.name}</h2>
                                    <p>Massa: {dado.mass}</p>
                                    <p>Hair Color: {dado.hair_color == "n/a" ? "Não Definido" : dado.hair_color}</p>
                                    <p>Skin Color: {dado.skin_color}</p>
                                    <p>Eye Color: {dado.eye_color}</p>
                                    <p>Birth Year: {dado.birth_year == "unknown" ? "Não definido" : dado.birth_year}</p>
                                    <p>Gender: {dado.gender == "n/a" ? "Não Definido" : dado.gender}</p>
                                </div>
                            )

                        })}

                    </div>

                </div>
            }

        </div>

    )
}

export default Galeria