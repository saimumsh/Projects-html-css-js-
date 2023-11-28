const container = document.querySelector('.container');
const percent = document.querySelector('.percent');

let aa = 0;
let int = setInterval(fun , 30);

function fun()
{
    aa++;
    if(aa>99){
        clearInterval(int);
    }
    percent.innerText = `${aa}%`;
    percent.style.opacity = scale(aa,0,100,1,0);
}

const scale = (x , a , b , c ,d) => {
    return (x-a)*(d-c) / (b-a)+c;
}
