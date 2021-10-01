// const container2 = document.querySelector('.container2')
// const container3 = document.querySelector('.container3')

// const text2 = document.querySelector('.ctext2')
// const text3 = document.querySelector('.ctext3')
// const options = {
//     root:null,
//     threshold: 0.6,
//     rootMargin: "0px"

// }
setTimeout(()=>{
    const helloText = document.querySelector('.hello');
    helloText.classList.add('animate__hinge')
},500)


// const observer = new IntersectionObserver(function(entries, observer){
// entries.forEach(entry => {
//    console.log(entry)
//     if(entry.isIntersecting && entry.target.classList[0] === 'container2'){
//         text2.classList.add('hitAnimation')
//         console.log('class 2 added')
//     }
//     else  if(entry.isIntersecting && entry.target.classList[0] === 'container3'){
//         text3.classList.add('hitAnimation')
//         console.log('class 3 added')
//     }
// })
// }, options);

// observer.observe(container2)
// observer.observe(container3)

