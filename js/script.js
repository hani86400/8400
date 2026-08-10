const menuToggle=document.getElementById("menuToggle"),navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const sections=document.querySelectorAll("main section[id]"),links=document.querySelectorAll('.nav-links a[href^="#"]');
new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-35% 0px -55% 0px"}).observe;
sections.forEach(s=>new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-35% 0px -55% 0px"}).observe(s));
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();alert("Contact form ready. Connect it to your preferred form endpoint.");});
