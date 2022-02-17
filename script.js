const loding = document.querySelector('.loding');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blur, 20);
function blur()
{
    load++;
    if (load > 99)
    {
        clearInterval(int);
    }
    loding.innerHTML = `${ load }%`;
    loding.style.opacity = 1 - (load / 100);
    bg.style.filter = `blur(${100-(load)}px)`
}