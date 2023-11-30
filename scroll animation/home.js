const scroll = document.querySelectorAll('.scroll');

window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes()
{
    const triggeerBottom = window.innerHeight / 5 * 4 ;
    scroll.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;
        if(contentTop<triggeerBottom)
        {
            content.classList.add('show');
        }
        else{
            content.classList.remove('show');
        }
    });
}