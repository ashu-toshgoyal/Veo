let t = document.getElementById("time");
let home_btn = document.getElementById("home"); //button 1
let about_btn = document.getElementById("about"); //button 2
let xp_btn = document.getElementById("xp");//button 3
let contact_btn = document.getElementById("Contact"); // button 4
// p tag data
let cont_1 = document.getElementById("contentid-1");
let cont_2 = document.getElementById("contentid-2");
let cont_3 = document.getElementById("contentid-3");
let cont_4 = document.getElementById("contentid-4");

function updateTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0"); // 09, 10, 11...
    t.innerText = `${hours}:${minutes}`;
}

// run when page finishes loading
setInterval(updateTime, 1000);
function hideAll() {
    cont_1.style.display = "none";
    cont_2.style.display = "none";
    cont_3.style.display = "none";
    cont_4.style.display = "none";
}
function hideAllmtlball() {
    document.getElementById("body").style.display = "none";
}


home_btn.addEventListener("click",()=>{ 
        hideAll(); // home button function
        cont_1.style.display = "block";
        about_btn.innerText = "About";
        xp_btn.innerText = "Experience";
        contact_btn.innerText = "Contact";
})
about_btn.addEventListener("click",()=>{ 
        hideAll(); // home button function
        cont_2.style.display = "block";
        about_btn.innerText = ">About";
        xp_btn.innerText = "Experience";
        contact_btn.innerText = "Contact";
})
xp_btn.addEventListener("click",()=>{
        hideAll(); // home button function
        cont_3.style.display = "block";
        about_btn.innerText = "About";
        xp_btn.innerText = ">Experience";
        contact_btn.innerText = "Contact";
})
contact_btn.addEventListener("click",()=>{ 
        hideAll();// home button function
        cont_4.style.display = "block";
        about_btn.innerText = "About";
        xp_btn.innerText = "Experience";
        contact_btn.innerText = ">Contact";
})

document.getElementById("hideall").addEventListener("click",()=>{
        hideAllmtlball();
        document.getElementById("hideall").style.display = 'block';
})