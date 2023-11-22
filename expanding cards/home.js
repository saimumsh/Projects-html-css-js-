const mms = document.querySelectorAll('.mm');

mms.forEach((mm) =>{
    mm.addEventListener('click',() => {
        removeActive();
        mm.classList.add('active');
    })
}
)

function removeActive()
{
    mms.forEach((mm)=> {
        mm.classList.remove('active');
    })
}