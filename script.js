let t = document.getElementById("time");

let home_btn = document.getElementById("home");
let about_btn = document.getElementById("about");
let xp_btn = document.getElementById("xp");
let contact_btn = document.getElementById("Contact");


let cont_1 = document.getElementById("contentid-1");
let cont_2 = document.getElementById("contentid-2");
let cont_3 = document.getElementById("contentid-3");
let cont_4 = document.getElementById("contentid-4");


let cont_5 = document.getElementById("contentid-5");
let cont_6 = document.getElementById("contentid-6");
let cont_7 = document.getElementById("contentid-7");
let cont_8 = document.getElementById("contentid-8");

let activeProfile = "ashu";   

function updateTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  t.innerText = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);



const items = document.querySelectorAll(".boot-item");
let index = 0;

function updateSelection() {
  items.forEach((item, i) =>
    item.classList.toggle("selected", i === index)
  );
}

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowDown") {
    index = (index + 1) % items.length;
    updateSelection();
  }

  if (e.key === "ArrowUp") {
    index = (index - 1 + items.length) % items.length;
    updateSelection();
  }

  if (e.key === "Enter") {

    document.querySelector(".boot-screen").style.display = "none";
    document.getElementById("f").style.display = "flex";

    document.body.style.color = "black";

    if (index === 0) {
      activeProfile = "ashu";
      home_btn.innerText = "Ashutosh";
      showAshuHome();
    }

    if (index === 1) {
      activeProfile = "manya";
      home_btn.innerText = "Manya";
      showManyaHome();
    }
  }
});



function hideAll() {
  [
    cont_1, cont_2, cont_3, cont_4,
    cont_5, cont_6, cont_7, cont_8
  ].forEach(box => box && (box.style.display = "none"));
}


function showAshuHome() {
  hideAll();
  cont_1.style.display = "block";

  about_btn.innerText = "About";
  xp_btn.innerText = "Experience";
  contact_btn.innerText = "Contact";
}

function showManyaHome() {
  hideAll();
  cont_5.style.display = "block";

  about_btn.innerText = "About";
  xp_btn.innerText = "Experience";
  contact_btn.innerText = "Contact";
}




home_btn.addEventListener("click", () => {
  activeProfile === "ashu" ? showAshuHome() : showManyaHome();
});

about_btn.addEventListener("click", () => {
  hideAll();

  if (activeProfile === "ashu") cont_2.style.display = "block";
  else cont_6.style.display = "block";

  about_btn.innerText = ">About";
  xp_btn.innerText = "Experience";
  contact_btn.innerText = "Contact";
});

xp_btn.addEventListener("click", () => {
  hideAll();

  if (activeProfile === "ashu") cont_3.style.display = "block";
  else cont_7.style.display = "block";

  about_btn.innerText = "About";
  xp_btn.innerText = ">Experience";
  contact_btn.innerText = "Contact";
});

contact_btn.addEventListener("click", () => {
  hideAll();

  if (activeProfile === "ashu") cont_4.style.display = "block";
  else cont_8.style.display = "block";

  about_btn.innerText = "About";
  xp_btn.innerText = "Experience";
  contact_btn.innerText = ">Contact";
});
