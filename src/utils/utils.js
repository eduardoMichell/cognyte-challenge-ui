export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
};