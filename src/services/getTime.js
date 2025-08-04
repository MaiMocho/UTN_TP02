export const getCurrentTimeAndDay = () => {
    const fecha = new Date();

    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const hora = `${horas}:${minutos}`;

    const diasSemana = [
        'domingo', 'lunes', 'martes', 'miércoles',
        'jueves', 'viernes', 'sábado'
    ];
    const día = diasSemana[fecha.getDay()];

    return { hora, día };
};
