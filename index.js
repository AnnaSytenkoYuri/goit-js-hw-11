import{a as p,S as y,i as c}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="19018033-87a1a51fb4261bc6ee99901a2";function b(i){return p.get(h,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`<div class="gallery-list">
          <a class="gallery-item" href="${a}">
          <div class="cart-item">
            <img src="${o}" alt="${e}" loading="lazy">
              <div class="info">
                <p class="info-item"><b>Likes:</b>${t}</p>
                <p class="info-item"><b>Views:</b>${s}</p>
                <p class="info-item"><b>Comments:</b>${f}</p>
                <p class="info-item"><b>Downloads:</b>${m}</p>
              </div>
            </div>
          </a>
        </div>`).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){u.innerHTML=""}function q(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}const n=document.querySelector(".form"),P=n.elements["search-text"];n.addEventListener("submit",$);function $(i){i.preventDefault();const r=P.value.trim();if(!r){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(),q(),b(r).then(o=>{if(l(),o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{l(),console.error(o)}),n.reset()}
//# sourceMappingURL=index.js.map
