import makeMeAPromise from './index.js'
const data = {
    car: 'BMW',
    color: 'red',
    year: '2018',
    price: '$1,000,000',
}

console.log(makeMeAPromise(data))
console.log(makeMeAPromise(data,'reject'))