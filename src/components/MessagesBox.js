import React, { useRef, useEffect } from 'react'
import Message from './Message'

//SECCION DE LOS MENSAJES EN EL CHAT, NO INLCUYE EL HEADER (NOMBRE Y AVATAR DEL ACTUAL CHAT) O LA BARRA PARA ENVIAR Y ESCRIBIR MENSAJES

export default function MessagesBox({ messages, avatar, avatarP }) {
    //SCROLL PARA EL ULTIMO MENSAJE ENVIADO
    const endDiv = useRef(null)
    useEffect(() => {
        endDiv.current.scrollIntoView()
    }, [messages])
    //SE MAPEAN TODOS LOS MENSAJES ENVIADOS, CADA UNO CON SUS PARAMETROS
    return (
        <div className="chats">
            {messages
                .map((m) => (
                    <Message message={m} key={m.id} avatar={avatar} avatarP={avatarP}/>
                ))}
            <div style={{ float: 'right', clear: 'both' }} ref={endDiv}></div>
        </div>
    )
}