import React from 'react'

//CADA MENSAJE, INCLUYENDO EL AVATAR DEL USUARIO QUE LO ENVIO

export default function Message({ message, avatar, avatarP}) {
    //PARA SABER SI EL MENSAJE FUE ENVIADO POR EL USUARIO PRINCIPAL O SECUNDARIO MEDIANTE UN BOOLEAN
    let classMsg
    let classImg
    let classChat
    if(message.isMainUser === true){
         classMsg = "message sent";
         classChat = "chat__item";
         classImg = `${avatarP.avatar}`;
    }else{
         classMsg = "message received";
         classChat = "chat__item other";
         classImg = `${avatar.avatar}`;
    }
    return (
    <div className={classChat}>
    <span className="date">{message.date}</span>
        <div className={classMsg}>
            <div className="metadata">
                {message.msg}
            </div>
        </div>
        <img src={classImg} className="avatarMsg" alt="avatar" />
    </div>
    )
}