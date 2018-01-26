import './assets/styles/app.scss'
// import './assets/styles/app.less'

import * as api from './app/api'

let n = {
    a: true,
    b: true
}

n = {
    ...n,
    c: true
}

console.log(n)

if (process.env.NODE_ENV === 'production') {
    console.log('PRODUCTION')
}

console.log(process.env.API_URL)

api.getPosts().then((res) => {
    console.log(res)
})