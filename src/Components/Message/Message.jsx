import React, { useState } from 'react'
import './Message.css'
import ICONS from '../../assets/Icons'
const Message = ({ emisor, hora, dia, id, texto, status, deleteMessageById }) => {

	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	return (
		<div onContextMenu={handleChangeMessageSelected} className={`message-container ${emisor === 'YO' ? 'from-me' : 'from-them'}`}>
			<span className='message-text'>{texto}</span>
			<span className='message-time'>{hora}
				<span className='message-status'> {emisor === 'YO' ? <ICONS.seen/> : null}</span>				
			</span>

			{/* {
				message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
			} */}
		</div>
	)
}
export default Message