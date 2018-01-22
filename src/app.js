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

if (process.env.NODE_ENV === 'production') {
    console.log('PRODUCTION')
}

console.log(process.env.API_URL)