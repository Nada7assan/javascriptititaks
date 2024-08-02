var img = document.getElementsByTagName("img");
var index = 0;
var interval;


    window.addEventListener("load",function() {
    
        interval = setInterval(() => {
            
            if (i < 4) {
                img[index].src = "marble1.jpg";
                index++;
            }
            else
                index = 0;
            img[index].src = "marble2.jpg";
    
        }, 800);})


        for (var i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener("mouseenter", function() {
        clearInterval(interval);
    });

    imgArr[i].addEventListener("mouseleave", function() {
        interval = setInterval(function(){
            if (index < img.length ){
                img[index].src = "marble2.jpg";
                index++;}

        }, 1000);
    });
}

startAnimation ();

