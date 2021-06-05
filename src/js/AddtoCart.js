const InitValue = (id, name) => {
    const temp = [{
        productId: id,
        name: name,
        quantity: 1
    }]
    return JSON.stringify(temp)
}

export const addToCart = (productId, name) => {
    if (!productId) return null;
    if (localStorage.getItem("cartList") === null) localStorage.setItem("cartList", InitValue(productId, name));
    else {
        const list = localStorage.getItem("cartList");
        const listJSON = JSON.parse(list)
        const objIndex = listJSON.findIndex((obj => obj.productId === productId));
        if (objIndex >= 0) listJSON[objIndex].quantity += 1;
        else listJSON.push({
            productId: productId,
            name: name,
            quantity: 1
        })
        localStorage.setItem("cartList", JSON.stringify(listJSON));
    }

}

export const updatedCart = (val) => localStorage.setItem("cartList", val)