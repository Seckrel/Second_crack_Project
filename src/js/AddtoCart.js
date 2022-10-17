const InitValue = (id, name, pricePerUnit) => {
    const temp = [{
        productId: id,
        name: name,
        quantity: 1,
        pricePerUnit: pricePerUnit
    }]
    return JSON.stringify(temp)
}

export const addToCart = (productId, name, pricePerUnit) => {
    if (!productId) return null;
    if (localStorage.getItem("cartList") === null) localStorage.setItem("cartList", InitValue(productId, name, pricePerUnit));
    else {
        const list = localStorage.getItem("cartList");
        const listJSON = JSON.parse(list)
        const objIndex = listJSON.findIndex((obj => obj.productId === productId));
        if (objIndex >= 0) listJSON[objIndex].quantity += 1;
        else listJSON.push({
            productId: productId,
            name: name,
            quantity: 1,
            pricePerUnit: pricePerUnit
        })
        localStorage.setItem("cartList", JSON.stringify(listJSON));
    }

}

export const updatedCart = (val) => localStorage.setItem("cartList", val)