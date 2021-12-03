import avatar1 from './assets/avatar-1.png';
import avatar2 from './assets/avatar-2.png';
import avatar3 from './assets/avatar-3.png';
import avatar4 from './assets/avatar-4.png';

export class Message {
    constructor(id, isMainUser, msg, date) {
        this.id = id
        this.msg = msg
        this.isMainUser = isMainUser
        this.date = date 
    }
}
let principal = {
    id: 1,
    name: "Matias Casullo",
    avatar: avatar4,
    msj: new Message(100,false, "hola 1", "15:04")
}
let user1 = {
    id: 1,
    name: "Luciana Gutierrez",
    vocation: "Team Leader",
    avatar: avatar2,
    msj: new Message(102,true, "Hola Luciana! Hay alguna novedad acerca de la meet de hoy?", "10:10"),
    msj2: new Message(103,false, "Si tengo alguna otra novedad te comento. Gracias!", "10:20"),
}
let user2 = {
    id: 2,
    name: "Micaela Alvarez",
    vocation: "Marketing Manager",
    avatar: avatar1,
    msj: new Message(104,false, "Hola John! Entre que horarios podrias hoy tener la meeting?", "9:45"),
    msj2: new Message(105,true, "Hola Micaela! Muy bien. Yo puedo de 10 a 17hs.", "10:05"),
    msj3: new Message(106,false, "Dale, agende la meeting para hoy a las 14s.", "10:15"),
}
let user3 = {
    id: 3,
    name: "Manuel Hoffmann",
    vocation: "BackEnd Developer",
    avatar: avatar3,
    msj: new Message(107,true, "Gracias por la API!", "9:30"),
    msj2: new Message(108,false, "Gracias a vos!", "9:37"),
}


export const mainUser = principal

export const contacts = [user1,user2,user3]

export const contactsMessages = contacts.map((contact) => {
    let ms
    if(contact.msj3 !=null){
        ms = [contact.msj, contact.msj2, contact.msj3]
    }else{
        ms = [contact.msj, contact.msj2]
    }
    return {
        contact,
        messages: ms
    }
})