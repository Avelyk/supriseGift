const firstview = document.getElementById("firstView");
const secondView = document.getElementById("secondView");

function showSecondView(){
    firstview.classList.add("hidden");
    secondView.classList.remove("hidden");
}

function goBack(){
    firstview.classList.remove("hidden");
    secondView.classList.add("hidden");
}

function openIt(){
    window.location.href = "../OPENING/index.html";
}