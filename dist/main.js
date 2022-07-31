(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("h1");t.classList.add("pageTitle"),t.innerText="Restaurant Page",e.appendChild(t);const n=document.createElement("p");n.classList.add("contentText"),n.innerText="Serving Adelaide's best pasta since 1980.",e.appendChild(n);const c=document.createElement("img");c.src="https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",c.style.height="400px",c.style.width="auto",e.appendChild(c)};function t(){content.innerHTML=""}e();const n=document.getElementById("home-btn"),c=document.getElementById("menu-btn"),a=document.getElementById("contact-btn");n.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.classList.add("pageTitle"),t.innerText="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("menuContainer"),e.appendChild(n);const c=e=>{const t=document.createElement("div");t.classList.add("menuCategory"),t.setAttribute("id",e),n.appendChild(t);const c=document.createElement("h1");var a;c.textContent=(a=e).charAt(0).toUpperCase()+a.slice(1),t.appendChild(c);const d=document.createElement("div");return d.classList.add("categoryItems"),t.appendChild(d),d},a=c("starters"),d=c("mains"),i=c("desserts"),s=(e,t,n,c)=>{const a=document.createElement("div");a.classList.add("itemCard"),a.setAttribute("id",e);const d=document.createElement("div");d.classList.add("itemInfo");const i=document.createElement("div");i.textContent=e,d.appendChild(i);const s=document.createElement("div");s.textContent=n,d.appendChild(s),a.appendChild(d);const o=document.createElement("img");o.src=t,o.classList.add("itemImage"),a.appendChild(o),c.appendChild(a)};s("Garlic Bread","images/garlicBread.jpeg","$10",a),s("Arancini Balls","images/aranciniBalls.jpeg","$15",a),s("Pasta","images/pasta.jpeg","$25",d),s("Chocolate Mousse","images/chocolateMousse.jpeg","$15",i)}()})),a.addEventListener("click",(()=>{t(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.classList.add("pageTitle"),t.innerText="Contact Us!",e.appendChild(t);const n=(t,n,c)=>{const a=document.createElement("div");a.classList.add("contactItems"),a.textContent=`${t}`;const d=document.createElement("a");d.classList.add("contactLink"),d.textContent=c,d.href=n,a.appendChild(d),e.append(a)};n("Email:","mailto:dummyemail@gmail.com","dummyemail@gmail.com"),n("LinkedIn:","https://www.linkedin.com/in/zachary-hill/","https://www.linkedin.com/in/zachary-hill/"),n("Github:","https://github.com/zac-h","zac-h")}()}))})();