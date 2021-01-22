
function addEffect(entries, options) {
    console.log(entries)
    for (entry of entries) {
        console.log(entry.target, entry.isIntersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
        } else {
            entry.target.classList.remove('animate')
        }
    }
}


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(addEffect, options);

observer.observe(document.querySelector('#cool'));

observer.observe(document.querySelector('#cool2'));



