(()=>{"use strict";const e=()=>{const e=document.querySelector(".inicioButton"),t=document.querySelector(".menuButton"),n=document.querySelector(".contactButton");e.style.cssText="border-bottom: solid white 2px",t.style.cssText="border-bottom: hidden",n.style.cssText="border-bottom: hidden";const o=document.querySelector(".dynamicZone");for(;o.firstChild;)o.removeChild(o.firstChild);const d=document.createElement("div");d.classList.add("inicio");const c=document.createElement("p"),s=document.createElement("p"),a=document.createElement("img");a.classList.add("image");const i=document.createElement("p");c.textContent="La mejor pizza de Italia",s.textContent="algun copypaste algun copypaste algun copypaste algun copypaste",c.classList.add("firstParagraph"),s.classList.add("secondParagraph"),a.src="../src/profile.jpg",i.textContent="Pedi online o visitanos!",i.classList.add("thirdParagraph"),o.appendChild(d),d.appendChild(c),d.appendChild(s),d.appendChild(a),d.appendChild(i)},t=document.querySelector("#content"),n=document.createElement("header");n.classList.add("header");const o=document.createElement("footer");o.classList.add("footer");const d=document.createElement("h1");d.classList.add("title"),d.textContent="Pizzeria";const c=document.createElement("div");c.classList.add("buttonsDiv");const s=document.createElement("button");s.textContent="Inicio",s.classList.add("inicioButton"),s.addEventListener("click",(()=>{e()}));const a=document.createElement("button");a.textContent="Menu",a.classList.add("menuButton"),a.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".inicioButton"),t=document.querySelector(".menuButton"),n=document.querySelector(".contactButton");t.style.cssText="border-bottom: solid white 2px",e.style.cssText="border-bottom: hidden",n.style.cssText="border-bottom: hidden";const o=document.querySelector(".dynamicZone");for(;o.firstChild;)o.removeChild(o.firstChild);const d=document.createElement("img");d.classList.add("menu"),d.src="../src/menu.jpeg",d.addEventListener("click",(()=>{d.requestFullscreen()})),o.appendChild(d)})()}));const i=document.createElement("button");i.textContent="Contacto",i.classList.add("contactButton"),i.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".inicioButton"),t=document.querySelector(".menuButton");document.querySelector(".contactButton").style.cssText="border-bottom: solid white 2px",t.style.cssText="border-bottom: hidden",e.style.cssText="border-bottom: hidden";const n=document.querySelector(".dynamicZone");for(;n.firstChild;)n.removeChild(n.firstChild);const o=document.createElement("div");o.classList.add("contacts");const d=document.createElement("p");d.classList.add("telefono");const c=document.createElement("p");c.classList.add("direccion");const s=document.createElement("iframe");s.classList.add("googleMap"),d.textContent="Telefono: 0123456789",c.textContent="Direccion: Via della Lungaretta, 101, Roma, Italia",s.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1483631403994!2d12.470578614996793!3d41.88966627267005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60480182dd0f%3A0x6d8c00c1bf4a92f1!2sVia%20della%20Lungaretta%2C%20101%2C%2000153%20Roma%20RM%2C%20Italia!5e0!3m2!1ses!2sar!4v1622294804554!5m2!1ses!2sar",n.appendChild(o),o.appendChild(d),o.appendChild(c),o.appendChild(s)})()}));const l=document.createElement("div");l.classList.add("dynamicZone");const r=document.createElement("div");r.classList.add("footerContent");const m=document.createElement("p");m.textContent="Hecho por SebasDrewes";const u=document.createElement("img");u.src="../src/github.png",u.classList.add("github"),u.addEventListener("click",(()=>{window.open("https://github.com/SebasDrewes/","_blank")})),t.appendChild(n),n.appendChild(d),n.appendChild(c),c.appendChild(s),c.appendChild(a),c.appendChild(i),t.appendChild(l),t.appendChild(o),o.appendChild(r),r.appendChild(m),r.appendChild(u),window.onload=function(){e()}})();