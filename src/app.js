import './assets/styles/app.scss'
// import './assets/styles/app.less'

let n = {
    a: true,
    b: true
}

n = {
    ...n,
    c: false
}

console.log(n)