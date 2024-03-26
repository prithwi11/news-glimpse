export const dateFormat = (date) => {
    if (date != null || date != '' || date != undefined) {
        const dateNew = new Date(date);
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        }).format(dateNew);
        return formattedDate
    }
    return ''
}