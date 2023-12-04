function clockTime() {
    var date = new Date();
    
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
    var time = `${hours}:${minutes}:${seconds}`;
    var clock = document.getElementById("clock");
    clock.innerHTML = time;
    
    var dayPerWeek = date.toLocaleString('en-US', { weekday: 'long' });
    var month = date.toLocaleString('en-US', { month: 'long' });
    var day = date.getDate();
    var year = date.getFullYear();
    var dateInfo = `${dayPerWeek} | ${month} | ${day} | ${year}`;
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = dateInfo;
}

setInterval(clockTime, 1000);
