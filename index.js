const makeMeApromise = function(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve({
        car: 'BMW',
        color: 'red',
        year: '2018',
    })
    },700)
})
}


const makeMeApromiseES6 = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve({
        car: 'BMW',
        color: 'red',
        year: '2018',
    })
    },700)
})


export default makeMeApromise;