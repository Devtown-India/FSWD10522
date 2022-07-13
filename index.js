const makeMeApromise = (data,state="resolve")=> new Promise((resolve, reject)=>{
    if(state=='resolve'){
        resolve(data);
    }else{
        reject("OOps!!!!");
    }
})

export default makeMeApromise;