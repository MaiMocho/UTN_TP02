import contacts from "./contacts"

export const getContactList = () => {
    return contacts
}
export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}
export const contactService = {
    getContacts: () => contacts,
};
export const getLastMessage = (contact_id) => {
    const contact = getContactById(contact_id);
    if (contact && contact.messages.length > 0) {
        return contact.messages[contact.messages.length - 1];
    }
    return null;
};