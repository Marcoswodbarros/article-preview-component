let shareDesktop = document.querySelector(".profile__shareIcon").addEventListener("click", function () {
    document.querySelector(".sharing").style.display="flex";
});

let hideDesktop = document.querySelector(".sharing").addEventListener("click", function () {
    document.querySelector(".sharing").style.display="none";
});