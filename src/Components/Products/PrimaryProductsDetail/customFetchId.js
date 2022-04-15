    const customFetchId = (time,task,Id) => {
    return new Promise((resolve,reject) => {
        const filterProductsId = task.find(
            (product) => product.id === Number(Id)
        )
        setTimeout(() => {
            Id? resolve(filterProductsId): resolve(task);
        },time);
    });
}
export default customFetchId;