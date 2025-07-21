import React, {useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { NavLink, Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

const App = () => {

	return (
		<div>
			<header className='sideBar'>
				<h1>bay bgay</h1>
			</header>
			<header className='topBar'>
				<h1>hola hola</h1>
			</header>
			<header className='Chats-Selector'>
				<nav>
					<li><NavLink to="/contact/1/messages">Contacto 1</NavLink></li>	
					<li><NavLink to="/contact/2/messages">Contacto 2</NavLink> </li>
					<li><NavLink to="/contact/3/messages">Contacto 3</NavLink> </li>
				</nav>
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
