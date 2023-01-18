// redirect
const redirect = (url) => {
    window.location.href = url;
}

// update clock every second
const currentTime = () => {
    const d = new Date();
    let time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    return time;
}

const updateTime = (time) => {
    document.querySelector("#time").innerText = time;
}

// update date
const currentDate = () => {
    const d = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date = `${weekday[d.getDay()]}, ${month[d.getMonth()]} ${d.getDate()}`;
    return date;
}

const updateDate = (date) => {
    document.querySelector("#datetime").innerText = date;
}

// update everything
setInterval(() => {
    updateTime(currentTime());
    updateDate(currentDate());
}, 500);
