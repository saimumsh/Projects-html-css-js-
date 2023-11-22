const circles= document.querySelectorAll('.mm');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const line = document.getElementById('line');

let temp = 1;
let pp = (temp/circles.length)*100;
next.addEventListener('click', ()=> {
    temp++;
    if(temp>circles.length){
        temp = circles.length;
        next.disabled = true ;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
    vfun();
   
})
prev.addEventListener('click', ()=> {
    temp--;
    if(temp<1){
        temp = 1;
        prev.disabled=true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
    vfun();
})

function vfun(){
    circles.forEach((circle,idx)=> {
        if(idx<temp){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }

    })
    //console.log((temp-1)/(circles.length-1));
    line.style.width= ((temp-1)/(circles.length-1))*100 + '%';
}

   
   
//line.style.width=(temp)/(circles.length)*100 + '%';