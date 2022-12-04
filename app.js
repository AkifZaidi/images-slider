var images = [
  'images/rools.jpeg',
  'images/car4.webp',
  'images/car2.jpg'
]

var firstImages = 0;
var lastImages = images.length -1
var currentImages = 0

var button1 = document.getElementById("button1")
function next(){
  const tag = document.getElementById("pic")
  currentImages++;
  if(currentImages >= lastImages){
    currentImages  = 2
  }
   
  tag.src = images[currentImages]
}
var button2 = document.getElementById("button2")
function previous(){
  const tag = document.getElementById("pic")
  currentImages--;
  if(currentImages <= firstImages){
    currentImages  = 0
  }
   
  tag.src = images[currentImages]
}