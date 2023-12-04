function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var time = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    var clock = document.getElementById("clock");
    clock.innerHTML = time;
}
function updateDate()
{
    var date = new Date();
    var dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    var month = date.toLocaleString('en-US', { month: 'long' });
    var day = date.getDate();
    var year = date.getFullYear();
    var dateInfo = `${dayOfWeek}, ${month} ${day}, ${year}`;
    var days = document.getElementById("date");
    days.innerHTML = dateInfo;
}

setInterval(updateClock, 1000);
setInterval(updateDate, 1000);