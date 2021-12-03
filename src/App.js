import React, { useState, useEffect } from 'react'

import {mainUser, contactsMessages, Message } from './fakeDatabase'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessagesBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import logoPsh from './assets/psh_brand.png'

import './App.css'

function App() {
    //DATA CONTIENE UN ARRAY DE 3 ELEMENTOS, CADA UNO CORRESPONDE A UN CONTACTO Y CONTIENE MENSAJE Y DATOS DEL CONTACTO
    const [data, setData] = useState(contactsMessages)
    //CONTACTO ACTUAL SELECCIONADO
    const [contactSelected, setContactSelected] = useState({})
    //MENSAJES PARA ENVIAR AL MESSAJEBOX
    const [currentMessages, setCurrentMessages] = useState([])
    //MANEJO DE MENSAJES Y LIMPIEZA DEL MISMO AL ENVIARLO
    const [message, setMessage] = useState('')
    //CONTACTOS EN EL CONTACTBOX
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const currContact = data.find((d) => d.contact.id === contactSelected.id)
        setCurrentMessages((currContact && currContact.messages) || [])
        showContacts(data)
    }, [contactSelected, data])

    function pushMessage() {
        const index = data.findIndex((d) => d.contact.id === contactSelected.id)
        //GENERO LA HORA PARA EL MENSAJE NUEVO
        let today = new Date();
        let todayId = new Date();
        let hh = String(today.getHours());
        let mn = String(today.getMinutes()).padStart(2, '0');
        let sc = String(today.getSeconds()).padStart(2, '0');
        let mc = String(today.getMilliseconds()).padStart(2, '0');
        //HORA PARA EL MENSAJE NUEVO
        today = hh + ':' + mn
        //CREO UN ID CON EL HORARIO (CON MICROSEGUNDOS) ASI NO HAY REPETIDOS
        todayId = hh + ':' + mn + ':' + sc + ':' + mc
        const newData = Object.assign([], data, {
            [index]: {
                contact: contactSelected,
                messages: [...data[index].messages, new Message(todayId, true, message, today)]
            },
        })

        setData(newData)
        setMessage('')
    }

    //LE PASO LOS CONTACTOS DEL JSON
    function showContacts(data) {
        setContacts(data)
    }
    //ESTRUTURA PRINCIPAL 
    return (
        <div className="app">
            <aside>
                <header className="chatlist__heading">
                    <div className="psh__logo">
                        <img src={logoPsh} alt="logo"></img>
                    </div>
                    <h2>React Chat</h2>
                </header>
                <div className="contact-boxes">
                    {contacts.map(({ contact, messages }) => (
                        <ContactBox
                            contact={contact}
                            key={contact.id}
                            setContactSelected={setContactSelected}
                            messages={messages}
                        />
                    ))}
                    <button className="btn">
                    <i className="fa fa-plus"></i>
                    <span><b>Create New</b></span>
                </button>
                </div>
            </aside>
                <main>
                    <header>
                        <Avatar user={contactSelected} showName />
                    </header>
                    <MessagesBox messages={currentMessages} avatar={contactSelected} avatarP={mainUser}/>
                    <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage} />
                </main>
        </div>
    )
}

export default App