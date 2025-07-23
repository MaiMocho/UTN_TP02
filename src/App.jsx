import React, { useContext, useState } from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { NavLink, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import { ContactContext } from './Context/ContactContext'
import SideBar from './Screens/SideBar/SideBar'
import './global.css'

const App = () => {
	return (
		<div className='mainContainer'>
			<SideBar />
			<header className='chats-selector'>
				<h1 className='title'>
					Whatsapp
				</h1>
				{<ContactScreen />}
			</header>

			<div className='ChatScreen-Container'>
					<Routes>
						<Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
					</Routes>
			</div>
		</div>
	)
}
export default App
