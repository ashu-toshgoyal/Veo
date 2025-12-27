let t = document.getElementById("time");
const contenetspace = document.getElementById("contentid");
const xp = document.getElementById("xp");
const about = document.getElementById("about");
const ashu_homepage = document.getElementById("home");
const homepage = document.getElementById("contentid-1");
const aboutpage = document.getElementById("contentid-2");

// 👇 FIXED — About works as Home (no element with id="home")
// const home = document.getElementById("about");

// const homecontent = document.getElementById("contentid-1");

function updateTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0"); // 09, 10, 11...
    t.innerText = `${hours}:${minutes}`;
}

// run when page finishes loading
setInterval(updateTime, 1000);

ashu_homepage.addEventListener("click",()=>{
        about.innerText = "About"
        homepage.style.display ='block';
        aboutpage.style.display='none'; 
})
about.addEventListener("click",()=>{
        about.innerText = ">About"
        homepage.style.display ='none';
        aboutpage.style.display='block'; 
})