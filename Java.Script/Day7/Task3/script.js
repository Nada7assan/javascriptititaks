var img = document.getElementsByTagName("img");

let i = 0;
let interval;


function startAnimation() {
    
    interval = setInterval(() => {
        
        if (i < 5) {
            img[i].src = "marble1.jpg";
            i++;
        }
        else
            i = 0;
        img[i].src = "marble2.jpg";

    }, 800);
}

function stopAnimation() {
    clearInterval(interval);
}

for (marble of img) {
    marble.addEventListener("mouseover", stopAnimation);
    marble.addEventListener("mouseout", startAnimation);
}


startAnimation();