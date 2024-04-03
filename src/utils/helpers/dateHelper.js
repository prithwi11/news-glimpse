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

export const formatDateFromTimestamp = (timestamp) => {
    const dateTime = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const now = new Date();
    
    const year = dateTime.getFullYear();
    const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
    const day = ('0' + dateTime.getDate()).slice(-2);
    const hours = ('0' + dateTime.getHours()).slice(-2);
    const minutes = ('0' + dateTime.getMinutes()).slice(-2);
    
    // Format the time based on whether it's the current date or not
    let formattedTime;
    if (year === now.getFullYear() && month === ('0' + (now.getMonth() + 1)).slice(-2) && day === ('0' + now.getDate()).slice(-2)) {
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12; // Convert to 12-hour format
      formattedTime = `${hours12}:${minutes} ${period}`;
    } else {
      const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateTime);
      const daySuffix = getDaySuffix(day);
      formattedTime = `${day}${daySuffix} ${monthName}, ${hours}:${minutes}`;
    }
    
    return formattedTime;
  }

  export const dateForDailyData = (timestamp) => {
    const [datePart] = timestamp.split(" ");

    const dateParts = datePart.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const date = new Date(`${month} ${day}, ${year}`);
    const dayOfWeek = days[date.getDay()];
    const monthName = months[parseInt(month) - 1];

    const formattedDate = `${dayOfWeek}, ${monthName} ${day}`;
    return formattedDate
  }
  
  function getDaySuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }