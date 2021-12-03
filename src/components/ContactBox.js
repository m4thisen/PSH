import React from 'react'
import Avatar from './Avatar'

//CADA UNO DE LOS CHATS QUE SE MUESTRAN EN EL ASIDE (LADO IZQUIERDO)
//SE MUESTRA AVATAR, NOMBRE, ULTIMO MENSAJE Y HORARIO DEL MISMO DEL CONTACTO

export default function ContactBox({ contact, setContactSelected, messages }) {
    //DE LA LISTA DE MENSAJES, SELECCIONO EL ULTIMO ENVIADO PARA MOSTRARLO
    let tamano = messages.length;
    const lastMsg = messages[tamano -1]
    //PARA ACHICAR EL TAMAÑO DE TEXTO CUANDO SE MUESTRA EL ULTIMO MENSAJE POR SI EXCEDE EL LIMITE DE TAMAÑO
    let string = lastMsg.msg
    let length = 50;
    let trimmedString = string.substring(0, length);
    //setContactSelected SE ENCUENTRA EN APP.JS
    return (
        <div className="contact-box" tabIndex="-1" onClick={() => setContactSelected(contact)}>
            <Avatar user={contact} />
            <div className="right-section">
                <div className="contact-box-header">
                    <h3 className="avatar-title">{contact.name}</h3>
                    <span className="time-mark">{lastMsg.date}</span>
                </div>
                <div className="last-msg">
                    <span className="text" style={{width:'85%'}}>{trimmedString}</span>
                </div>
            </div>
        </div>
    )
}