"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[960],{960:function(t,e,n){function a(t,e){let n=new URL(window.location),a={page:document.title,accordion:t.innerText.trim()};n.search="",n.hash=e,window.history.pushState(a,"",n)}function c(t){t.target.matches(".accordion__button")&&Boolean(JSON.parse(t.target.getAttribute("aria-expanded")))&&a(t.target,t.target.dataset.bsTarget)}function o(t){let e=t.target.hash;a(t.target,e)}n.r(e),e.default=function(){document.getElementById("accordion")&&document.getElementById("accordion").addEventListener("click",c),document.querySelector(".navTabs")&&document.querySelector(".navTabs").addEventListener("click",o)}}}]);