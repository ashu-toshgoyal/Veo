let t = document.getElementById("time");

function updateTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0"); // 09, 10, 11...
    t.innerText = `${hours}:${minutes}`;
}

// run when page finishes loading
setInterval(updateTime, 1000);

