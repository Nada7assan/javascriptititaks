
var icon = document.querySelector("span");


icon.addEventListener("click", function(){
    icon.classList.toggle ("contentVisible");
if (icon.classList.contains("contentVisible")){
    document.querySelector("input").setAttribute("type","text");
    icon.textContent = "🕳️";
}
else {
    document.querySelector("input").setAttribute("type","password");
    icon.textContent = "👁";
}
}
)
