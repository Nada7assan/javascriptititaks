var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click",function(){
   var child = open("index2.html","newWindo","width:150,height:200");
    setTimeout(function(){
     child.close();
    },3500)
})