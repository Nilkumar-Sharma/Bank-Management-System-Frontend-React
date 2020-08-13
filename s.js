// new Promise
// console.log("hi")
// let a = 2;
// const d=new Promise((resolve, reject) => {

//     if (1 === 2) {
//         setTimeout(() => {
//             resolve("this is the ejcetedte ok value")
//         },3000)
//     } else {
//         reject("this is instant rejection")
//     }

// })
// d.then(x => console.log(x)).catch(error => console.log(error))
function dd() {
    let a = 0;
    console.log(this)
    let somethig = () => console.log(this)
    somethig()
}
dd()