import { NavLink } from "react-router";
import React from "react";
import "./ContactFilter.css";
const ContactFilterSection = () =>{
    return (
        <div>
            <div className='header-buttons'>
            <button className='individual-header-buttons'>Todos</button>
            <button className='individual-header-buttons'>No leídos</button>
            <button className='individual-header-buttons'>Favoritos</button>
            <button className='individual-header-buttons'>Grupos</button>
            </div>
            <div>
                <div className="hidden-chats">
                    <NavLink className="hidden-button">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="none">
                            <path d="M7 12C7 11.4477 7.44772 11 8 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12Z" fill="#a4a5a5"/>
                            <path d="M7 16C7 15.4477 7.44772 15 8 15L13 15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H8C7.44772 17 7 16.5523 7 16Z" fill="#a4a5a5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 21L4.53 23.06C3.86348 23.4599 3 22.9873 3 22.21L3 9.66667C3 8.19391 4.19391 7 5.66667 7L7 7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7L18.3333 7C19.8061 7 21 8.19391 21 9.66667V18.3333C21 19.8061 19.8061 21 18.3333 21H8ZM15 7H9L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V7ZM18.3333 9C18.7015 9 19 9.29848 19 9.66666V18.3333C19 18.7015 18.7015 19 18.3333 19H7.44603L5 20.4676L5 9.66667C5 9.29848 5.29848 9 5.66667 9L18.3333 9Z" fill="#a4a5a5"/>
                        </svg>
                        Chats restringidos</NavLink>
                    <NavLink className="hidden-button">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="none">
                            <path d="M5 8V19H19V8H5ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V6.525C3 6.29167 3.0375 6.06667 3.1125 5.85C3.1875 5.63333 3.3 5.43333 3.45 5.25L4.7 3.725C4.88333 3.49167 5.1125 3.3125 5.3875 3.1875C5.6625 3.0625 5.95 3 6.25 3H17.75C18.05 3 18.3375 3.0625 18.6125 3.1875C18.8875 3.3125 19.1167 3.49167 19.3 3.725L20.55 5.25C20.7 5.43333 20.8125 5.63333 20.8875 5.85C20.9625 6.06667 21 6.29167 21 6.525V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5.4 6H18.6L17.75 5H6.25L5.4 6Z" fill="#A1A2A2"/>
                            <path d="M15.3 14.45L12 17.75L8.7 14.45C8.3134 14.0634 8.3134 13.4366 8.7 13.05C9.0866 12.6634 9.7134 12.6634 10.1 13.05L11 13.95V10.75C11 10.1977 11.4477 9.75 12 9.75C12.5523 9.75 13 10.1977 13 10.75V13.95L13.9 13.05C14.2866 12.6634 14.9134 12.6634 15.3 13.05C15.6866 13.4366 15.6866 14.0634 15.3 14.45Z" fill="#A1A2A2"/>
                        </svg>
                        Archivados</NavLink>
                </div>
            </div>
        </div>	    
    ) 
}
export default ContactFilterSection
