import React from 'react'

//SECCION INFERIOR DEL CHAT, BARRA PARA INSERTAR MENSAJE Y BOTON PARA ENVIARLO

export default function ChatInputBox({ message, setMessage, pushMessage }) {
    //EVENTO PARA ENVIO DEL MENSAJE MEDIANTE CLICK O ENTER
    //EL METODO pushMessage Y setMessage SE ENCUENTRA EN app.js
    function handleKeyDown(e) {
        if (e.key === 'Enter' && message) {
            pushMessage()
        }
    }
    return (
        <div className="chat-input-box">
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button className="icon send" onClick={pushMessage}>
                <p>SEND</p>
            </button>
        </div>
    )
}