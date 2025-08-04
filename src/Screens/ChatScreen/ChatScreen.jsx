import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import MessagesList from '../../Components/MessagesList/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById, contactService } from '../../services/contactService.js'
import './ChatScreen.css'
import { getCurrentTimeAndDay } from '../../services/getTime.js'


const ChatScreen = () => {

	const {contact_id} = useParams()

	const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState([contact_selected])

	useEffect(() => {
		const selected = getContactById(contact_id)
		setMessages(selected.messages)
	}, [contact_id]
	)
	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}

	const handleContactClick = (contact) => {
    getContactById(contact);
};
	const contacts = contactService.getContacts();
	const addNewMessage = (text) => {
		const {hora, día} = getCurrentTimeAndDay()

		const new_mesage = {
			emisor: 'YO',
			hora,
			día,
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}
	const deleteAllMessages = () => {
		setMessages([])
	}
	
    return (
		<div className='background-style' >
			<Routes>
				<Route path="/contact/:contact_id/messages" element={<ChatScreen/>} />
			</Routes>
			<div className='chat-header'>
				<img src={contact_selected ? contact_selected.avatar : ''} className = "contact-avatar" alt="" />
				<div className='contact-info'>
					<span>{contact_selected ? contact_selected.name : 'Contactos'}</span>
					<p>Ultima conexión: 07:34hs</p>
				</div>

			</div>
				<MessagesList messages={messages}/>
				<NewMessageForm addNewMessage={addNewMessage}/>
		</div>
    )
}



export default ChatScreen