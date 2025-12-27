let t = document.getElementById("time");
const contenetspace = document.getElementById("contentid");
const xp = document.getElementById("xp");

// 👇 FIXED — About works as Home (no element with id="home")
const home = document.getElementById("about");

const homecontent = document.getElementById("contentid-1");

function updateTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0"); // 09, 10, 11...
    t.innerText = `${hours}:${minutes}`;
}

// run when page finishes loading
setInterval(updateTime, 1000);

// show home content section
home.addEventListener("click",()=>{
    homecontent.style.display='block';
})