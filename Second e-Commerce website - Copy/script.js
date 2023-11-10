const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close1=document.getElementById('close')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close1){
    close1.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}



const Mainimg=document.getElementById("main-img")
const Smallimg=document.getElementsByClassName("small-img")


Smallimg[0].onclick=function(){
    Mainimg.src=Smallimg[0].src
}
Smallimg[1].onclick=function(){
    Mainimg.src=Smallimg[1].src
}
Smallimg[2].onclick=function(){
    Mainimg.src=Smallimg[2].src
}
Smallimg[3].onclick=function(){
    Mainimg.src=Smallimg[3].src
}

// Get all the small product images
const smallImages = document.querySelectorAll('.small-img');

// Get the main product image
const mainImage = document.getElementById('main-img');

// Add click event listeners to each small image
smallImages.forEach((smallImg) => {
  smallImg.addEventListener('click', () => {
    // Get the source of the clicked small image
    const src = smallImg.getAttribute('src');

    // Set the source of the main image to the clicked small image source
    mainImage.setAttribute('src', src);
  });
});