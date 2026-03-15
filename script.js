/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}


/* =========================
   TYPING EFFECT
========================= */
const words = ["Web Developer","Programmer","Problem Solver"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

  current = words[i];

  document.getElementById("typing").textContent =
  current.substring(0,j);

  if(!isDeleting && j < current.length){
    j++;
  }

  else if(isDeleting && j > 0){
    j--;
  }

  else if(j === current.length){
    isDeleting = true;
    setTimeout(type,1000);
    return;
  }

  else{
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type,isDeleting ? 50 : 100);
}

type();


/* =========================
   SCROLL REVEAL EFFECT
========================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

  reveals.forEach(el=>{

    if(el.getBoundingClientRect().top < window.innerHeight - 100){

      el.classList.add("active");

    }

  });

});


/* =========================
   CONTACT FORM SUBMIT
========================= */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const responseMsg = document.getElementById("responseMsg");

responseMsg.innerText = "Sending message... ⏳";

try{

const response = await fetch(
"https://portfolio-backend-pzo3.onrender.com/api/contact",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,message})
}
);

const data = await response.json();

if(response.ok){

responseMsg.innerText =
data.message || "Message sent successfully ✅";

form.reset();

}

else{

responseMsg.innerText =
data.error || "Something went wrong ❌";

}

}

catch(error){

console.log("Fetch error:",error);

responseMsg.innerText =
"Server waking up... try again in few seconds ⏳";

}

});

}