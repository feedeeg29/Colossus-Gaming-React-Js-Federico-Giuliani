    const customFetchId = (time,task,id) => {
    return new Promise((resolve,reject) => {
        const filterProductsId = task.find(
            (product) => product.id === Number(id)
        )
        setTimeout(() => {
            id? resolve(filterProductsId): resolve(task);
        },time);
    });
}
export default customFetchId;