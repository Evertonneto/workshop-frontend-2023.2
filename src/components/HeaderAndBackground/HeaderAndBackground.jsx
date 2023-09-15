import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Video from '../Video/Video'
import { useState } from 'react'

const HeaderAndBackground = () => {
    let largura = window.screen.width;
    let conteudo;
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (largura < 600) {
            setMobile(true)
        }
    })

    if (mobile) {
        conteudo = ""
    } else {
        conteudo = <Video />
    }

    return (
        <>
            <Header />
            {/* <Video /> */}
            {conteudo}
        </>
    )
}

export default HeaderAndBackground