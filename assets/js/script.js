document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".burger"),t=document.querySelector(".header-close"),l=document.querySelector(".menu-wrap"),n=document.body;if(e.addEventListener("click",()=>{l.classList.add("menu-active"),n.classList.add("modal-open")}),t.addEventListener("click",()=>{l.classList.remove("menu-active"),n.classList.remove("modal-open")}),window.innerWidth<=500){let s=document.querySelectorAll("header a");s.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("menu-active"),n.classList.remove("modal-open")})})}if(!function(){let e=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>50?e.classList.add("header-active"):e.classList.remove("header-active")}}(),document.querySelector("#range")){let a=document.getElementById("range"),i=document.querySelector(".range-info__persent span");a.addEventListener("input",e=>{let t=e.target.value;i.textContent=`${t}`})}if(document.querySelector(".select")){let c=document.querySelectorAll(".select");c.forEach(e=>{let t=e.querySelectorAll("option"),l=t.length;e.style.display="none";let n=document.createElement("div");n.className="select",e.parentNode.appendChild(n),n.appendChild(e);let s=document.createElement("div");s.className="new-select",s.textContent=e.querySelector("option:disabled").textContent,n.appendChild(s);let a=document.createElement("div");a.className="new-select__list",n.appendChild(a);for(let i=1;i<l;i++){let c=document.createElement("div");c.className="new-select__item";let r=document.createElement("span");r.textContent=t[i].textContent,c.appendChild(r),c.dataset.value=t[i].value,a.appendChild(c)}let o=a.querySelectorAll(".new-select__item");a.style.height="0px",a.style.transition="height 300ms",s.addEventListener("click",()=>{s.classList.contains("on")?(s.classList.remove("on"),a.style.height="0px"):(s.classList.add("on"),a.style.height=`${a.scrollHeight}px`,o.forEach(t=>{t.addEventListener("click",()=>{let l=t.dataset.value;e.value=l,e.querySelector(`option[value="${l}"]`).setAttribute("selected","selected"),s.textContent=t.querySelector("span").textContent,a.style.height="0px",s.classList.remove("on"),s.classList.add("new-select_checked")})}))}),document.addEventListener("click",e=>{e.target.closest(".select")||(a.style.height="0px",s.classList.remove("on"))})})}if(document.querySelector(".input-item-file")){let r=document.querySelectorAll(".input-item-file input[type=file]");r.forEach(e=>{e.addEventListener("change",()=>{let t=e.files[0],l=e.closest(".input-item-file"),n=l.querySelector(".input-item-file__btn");n.textContent=t.name})})}AOS.init()});