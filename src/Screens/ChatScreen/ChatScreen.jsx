import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import MessagesList from '../../Components/MessagesList/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService.js'
import './ChatScreen.css'


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

	const addNewMessage = (text) => {
		
		const new_mesage = {
			emisor: 'YO',
			hora: '11:10', //Investigar acerca de Date.
			día: 'miércoles',
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
		<div className='background-style'>
			<Routes>
				<Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
			</Routes>
			<div>
				<h1>Mensajes:</h1>

			{/* 	{
					messages.length > 0
					&&
					<button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
				} */}

				<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
				<NewMessageForm addNewMessage={addNewMessage}/>
			</div>
		</div>
    )
}



export default ChatScreen