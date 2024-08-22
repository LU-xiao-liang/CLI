const log = console.log
const logDom = document.querySelector('#log')

console.log = function(...arg){

    let str = ''
    arg.forEach(v=>{
        str+=`<p>${v}</p>`
    })

    logDom.innerHTML = str
    log(...arg)
}