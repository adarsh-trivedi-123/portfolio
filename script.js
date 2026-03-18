/* MOBILE MENU */

function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}


/* TYPING EFFECT */

const words=["Web Developer","Programmer","Problem Solver"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting && j<current.length){
j++;
}

else if(isDeleting && j>0){
j--;
}

else if(j===current.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

else{
isDeleting=false;
i=(i+1)%words.length;
}

setTimeout(type,isDeleting?50:100);

}

type();


/* SCROLL REVEAL */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

if(el.getBoundingClientRect().top < window.innerHeight-100){

el.classList.add("active");

}

});

});


/* CONTACT FORM EMAILJS */

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const message=document.getElementById("message").value;

const responseMsg=document.getElementById("responseMsg");

responseMsg.innerText="Sending message... ⏳";

emailjs.send(

"service_n8z8v8q",
"template_lkul54u",

{
name:name,
email:email,
message:message
},

"A-S2VqpzLWJyy3mFl"

)

.then(function(){

responseMsg.innerText="Message Sent Successfully ✅";

form.reset();

})

.catch(function(error){

console.log(error);

responseMsg.innerText="Failed to send message ❌";

});

});

}