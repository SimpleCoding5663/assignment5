const donation = document.getElementById("donation");
const present = document.getElementById("present");
const update = document.getElementById("update");
const content = document.getElementById("content");

present.addEventListener("click",()=>{
  update.classList.remove("hidden");
  content.classList.add("hidden");
  present.classList.add("active");
  present.classList.remove("bg-gray");
  donation.classList.remove("active");
});

donation.addEventListener("click",()=>{
  content.classList.remove("hidden");
  update.classList.add("hidden");
  donation.classList.add("active");
  present.classList.remove("active");
});