var btns = document.querySelectorAll("button");
var img = document.images[0];
var imgArr = ["2.jpg","1.jpg","3.jpg","4.jpg","5.jpg"]

// Next 
var index = 0;

btns[0].addEventListener("click",function(){
    if (index < imgArr.length){
     img.src = imgArr[index];
      index++;
    }
}
)

// SlideShow
let interval ;
btns[1].addEventListener("click",function(){

    interval =  setInterval(function() {
        
        if (index < imgArr.length){
            
            img.src = imgArr[index];
            index++;
        }    
        else {index = 0}
      }, 1000); 
   }
  )

// Previous
btns[2].addEventListener("click",function(){
    if (index > 0){
     index--;
     img.src = imgArr[index];
    }
}
)

// Stop
btns[3].addEventListener("click",function(){
    clearInterval(interval)
}
)
