const navDialog=document.getElementById('nav-dialog');
function handleMenu(){
    navDialog.classList.toggle('hidden')
}


const initialtranslateLTR=-(48*4);
const initialtranslateRTL=36*4;



function setupIntersectionObserver(element, isLTR , speed){

    console.log(isLTR)
const  intersectionCallback = (entries)=>{

    const isIntersecting= entries[0].isIntersecting;
    if(isIntersecting){
        document.addEventListener('scroll',scrollHandler)
       
    }else{
        document.removeEventListener('scroll', scrollHandler)
    }
}

    const intesectionObserver= new IntersectionObserver(intersectionCallback)
    intesectionObserver.observe(element)

   function scrollHandler(){
    const translateX = (window.innerHeight-element.getBoundingClientRect().top)*speed;
    let totaltranslate=0;
    if(isLTR){
        totaltranslate=initialtranslateLTR+translateX;

    }else{
        console.log("rtl")
        totaltranslate=-( initialtranslateRTL+translateX);
    }
    element.style.transform = `translateX(${totaltranslate}px)`;
   }

}

const line1= document.getElementById('line1');
const line2= document.getElementById('line2');
const line3= document.getElementById('line3');
const line4= document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line3, true, 0.15)
setupIntersectionObserver(line4, true, 0.8)

const dtElement = document.querySelectorAll('dt')
dtElement.forEach(element => {
    element.addEventListener("click",()=>{
        const ddid=element.getAttribute('aria-controls');
        const ddElement= document.getElementById(ddid);
        const ddArrowIcon= element.querySelectorAll('i')[0];
        console.log(ddArrowIcon);
        ddElement.classList.toggle('hidden')
        // ddArrowIcon.classList.toggle('-rotate-180')
        console.log(ddArrowIcon.classList.toggle('rotate-180'));
    })
});

let modelBox = document.getElementById('modelBox');

document.getElementById("togglebutton").addEventListener("click", ()=>{
    if(modelBox.classList.contains('hidden')){
        console.log('entered')
        modelBox.classList.remove('hidden')
    }else{
        modelBox.classList.add('hidden')
    }
})

