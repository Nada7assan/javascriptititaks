// Bottom image

var image = document.createElement('img');
image.src =  'dom.jpg';
image.alt = 'teddybear-image';
image.width = 300;
document.body.appendChild(image);

// top image

var header = document.getElementsByTagName("img")[0];
header.style.display = 'flex';
header.style.width = 300;
header.style.marginRight= '0';
header.style.marginLeft= 'auto';

// bullet

var list = document.getElementById("nav");
list.style.listStyleType = 'circle';
list.style.display = 'flex';
list.style.alignItems = 'center';
list.style.flexDirection = 'column';

