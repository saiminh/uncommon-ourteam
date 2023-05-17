let interval = null;

function listViewSwitcher(images){
  const ourteam = document.querySelector('.uncommon-ourteam'),
        switcher = document.querySelector('.uncommon-ourteam-switcher');
  switcher.addEventListener('click', ()=> {
    if (interval !== null) {
      clearAnimation(images);
      imagesFollowPointerX(images);
    } else {
      animateImagesLoop(images);
    }
    ourteam.classList.toggle('uncommon-ourteam--listview');
    switcher.classList.toggle('uncommon-ourteam-switcher--listview');
  })
}

function imagesFollowPointerX(images){
  images.forEach((image)=>{
    image.addEventListener('mousemove', (e)=>{
      if (document.querySelector('.uncommon-ourteam--listview')){
        motion.animate(image.querySelector('.uncommon-ourteam-teammember-images'), {x: `${e.clientX - 50}px`, y: `-50%`, rotate: `5`}, { duration: 0 })
      }
    })
  })
}

function createNewPosition(elem){
  const container = document.querySelector('.uncommon-ourteam'),  
        elemWidth = elem.getBoundingClientRect().width,
        elemHeight = elem.getBoundingClientRect().height,
        w = container.getBoundingClientRect().width - elemWidth,
        h = container.getBoundingClientRect().height - elemHeight,
        nh = Math.floor(Math.random() * h),
        nw = Math.floor(Math.random() * w);
 
  return {
    x: nw,
    y: nh
  }    
} 

function animateImageOnce(animage){
  let position = createNewPosition(animage);
  motion.animate(animage, {
    x: `${position.x}px`, 
    y: `${position.y}px`
  },{
    duration: 10,
    easing: 'linear'
  });
}

function animateImagesLoop(images){
  
  images.forEach((image)=>{
    let position = createNewPosition(image);
    motion.animate(image, { x: `${position.x}px`, y: `${position.y}px` }, { duration: 0 });
    setTimeout( () => {animateImageOnce(image)}, 60);
  })
  interval = setInterval(()=>{
    images.forEach((image)=>{
      position = createNewPosition(image);
      setTimeout( () => {animateImageOnce(image)}, 60);
    })
  }, 10060);
}

function clearAnimation(images){
  images.forEach((image)=>{
    clearInterval(interval);
    interval = null;
    motion.animate(image, { x: `0px`, y: `0px` }, { duration: 0 });
  })
}

window.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.uncommon-ourteam-teammember');
  listViewSwitcher(images);
  animateImagesLoop(images);
});