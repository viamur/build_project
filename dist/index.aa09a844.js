var guideList=document.querySelector(".guides"),loggedOutLinks=document.querySelectorAll(".logged-out"),loggedInLinks=document.querySelectorAll(".logged-in"),accountDetails=document.querySelector(".account-details"),setupUI=function(e){e?(db.collection("users").doc(e.uid).get().then((function(n){var t="\n        <div>Logged in as ".concat(e.email,"</div>\n        <div>").concat(n.data().bio,"</div>\n      ");accountDetails.innerHTML=t})),loggedInLinks.forEach((function(e){return e.style.display="block"})),loggedOutLinks.forEach((function(e){return e.style.display="none"}))):(accountDetails.innerHTML="",loggedInLinks.forEach((function(e){return e.style.display="none"})),loggedOutLinks.forEach((function(e){return e.style.display="block"})))},setupGuides=function(e){if(e.length){var n="";e.forEach((function(e){var t=e.data(),o='\n        <li>\n          <div class="collapsible-header grey lighten-4"> '.concat(t.title,' </div>\n          <div class="collapsible-body white"> ').concat(t.content," </div>\n        </li>\n      ");n+=o})),guideList.innerHTML=n}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");M.Modal.init(e);var n=document.querySelectorAll(".collapsible");M.Collapsible.init(n)}));
//# sourceMappingURL=index.aa09a844.js.map
