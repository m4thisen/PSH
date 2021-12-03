import React from 'react'

//SECCION PARA MOSTRAR LA FOTO DEL USUARIO, ADICIONALMENTE SI SE LE PASA "showName" MUESTRA EL NOMBRE Y VOCACION DEL USUARIO.

export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            <div style={{display:"flex"}}>
                <img className="avatar" src={user.avatar} alt="" />
            </div>
            <div>
                <div style={{display:"flex"}}>
                {showName && <h3 className="avatar-title">{user.name}</h3>}
                </div>
                <div style={{display:"flex"}}>
                {showName && <h4 className="avatar-sub-title">{user.vocation}</h4>}
                </div>
            </div>
        </div>
    )
}
