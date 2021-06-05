const GetFromCart = () => {
    if (!localStorage.getItem("cartList")) return [];
    return JSON.parse(localStorage.getItem("cartList"));
}

export const CartList = GetFromCart;