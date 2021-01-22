// function isElementInViewport(el) {

//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//     );
// }

// let animationStarted = false;


// window.onscroll = function (e) {
//     // let cool = document.querySelector('#cool')
//     // addEffect(cool)
//     // let cool2 = document.querySelector('#cool2')
//     // addEffect(cool2)
// }


// function addEffect(cool) {
//     let inView = isElementInViewport(cool)

//     if (inView && !animationStarted) {
//         animationStarted = true
//         //Start animation
//         console.log('start animation')
//         cool.classList.add('animate')

//     } else if (!inView && animationStarted) {
//         animationStarted = false
//         console.log('reset animation')
//         cool.classList.remove('animate')
//         //Reset animation
//     } else {
//         console.log('do nothing')
//     }

// }

// function callbackFunc(entries, observer) {
//     console.log(entries, observer)
//     entries.forEach((entry) => {
//         console.log(entry.target, entry.isIntersecting)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate')
//         } else {
//             entry.target.classList.remove('animate')
//         }

//     })

// }



// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3
// };

// let observer = new IntersectionObserver(callbackFunc, options);

// observer.observe(document.getElementById('cool'));
// observer.observe(document.getElementById('cool2'));