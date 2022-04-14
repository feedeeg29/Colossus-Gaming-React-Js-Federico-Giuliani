let PromiseIsOk = true;

const CustomFetch = (time,task) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(PromiseIsOk){
                resolve(task);
            }else{
                reject('Error');
            }
        },time);
    });
}
export default CustomFetch;
