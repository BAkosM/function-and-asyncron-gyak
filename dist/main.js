document.addEventListener("DOMContentLoaded",(()=>{function e(e,t){let n=document.getElementById("results");if(n.textContent="",1==t)for(let t of e){let e=document.createElement("li");e.innerHTML=t.lastName+" "+t.firstName,n.appendChild(e)}else if(2==t);else if(3==t){let t=0;for(let n of e)t+=n.weight;let a=document.createElement("li");a.innerHTML=t+"kg az össz tömegük",n.appendChild(a)}else if(4==t){let t=document.createElement("li");t.innerHTML=e.length+" barna szemű van",n.appendChild(t)}}document.getElementById("allabc").addEventListener("click",(async()=>{let t=await fetch("users.json");e((await t.json()).users.sort((function(e,t){let n=e.lastName.toUpperCase(),a=t.lastName.toUpperCase();return n<a?-1:n>a?1:0})),1)})),document.getElementById("connection").addEventListener("click",(async()=>{})),document.getElementById("heightweight").addEventListener("click",(async()=>{let t=await fetch("users.json");e((await t.json()).users.filter((e=>e.height>=parseFloat(document.getElementById("tall").value))),3)})),document.getElementById("brown").addEventListener("click",(async()=>{let t=await fetch("users.json");e((await t.json()).users.filter((e=>"Brown"===e.eyeColor)),4)}))}));