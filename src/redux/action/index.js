// Add item to card
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// Delete item from card

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload: product
    }
}