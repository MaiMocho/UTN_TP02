const contacts = [
    {
        id: 1,
        name: 'Pepe',
        description: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://media.tenor.com/qi-hY_XRltgAAAAi/funny-cursed.gif',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola estoy hablando con pepe',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Si el que canta y baila',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 1,
                texto: 'Todo esta bien?',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        description: 'rie ama y sueña',
        avatar: 'https://alfabetajuega.com/hero/2018/10/171122.alfabetajuega-minecraft-creeper-241116.jpg?width=1200&aspect_ratio=16:9',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 1,
                texto: 'Todo esta bien?',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'zonzo',
        description: 'rie ama y sueña',
        avatar: 'https://media1.tenor.com/m/f32nuN3Mj5QAAAAC/cat-oof.gif',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 3,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 1,
                texto: 'Todo esta bien?',
                status: 'visto'
            }
        ]
    },
    {
        id: 4,
        name: 'Erick',
        description: 'hola',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'chau',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 4,
                texto: 'que decis?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 1,
                texto: 'nada :3',
                status: 'visto'
            }
        ]
    }
];

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