import{e as c,i as u,j as p,w as l,h as o}from"./app.5405f88f.js";var d=c({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(s){const r=u(),t=p();l(()=>r.path,()=>t.value.focus());const i=({target:a})=>{const e=document.querySelector(a.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};return()=>[o("span",{ref:t,tabindex:"-1"}),o("a",{href:`#${s.content}`,class:"skip-link sr-only",onClick:i},"Skip to content")]}});export{d as S};
