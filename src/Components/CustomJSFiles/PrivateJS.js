const customFetchCategory = (time,task,categoryId) => {
    return new Promise((resolve,reject) => {
        const filterProducts = task.filter(
            (product) => product.category === categoryId
        )
        setTimeout(() => {
            categoryId? resolve(filterProducts): resolve(task);
        },time);
    });
}
export default customFetchCategory;


