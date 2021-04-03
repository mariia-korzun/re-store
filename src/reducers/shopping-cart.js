const updateCartItems = (cartItems, newItem, oldItem) => {

    if (oldItem) {
        const index = cartItems.indexOf(oldItem)

        if (newItem.count <= 0) {
            return [
                ...cartItems.slice(0, index),
                ...cartItems.slice(index + 1)
            ]
        }
        return [...cartItems.slice(0, index),
            newItem,
        ...cartItems.slice(index + 1)]
    }
    return [
        ...cartItems,
        newItem
    ]
}
const updateCartItem = (cartItem = {}, book, quatity) => {

    const {
        id = book.id,
        title = book.title,
        count = 0,
        price = 0
    } = cartItem

    return {
        id,
        title,
        count: count + quatity,
        price: price + quatity * book.price
    }
}


const updateOrder = (state, bookId, quatity) => {
    const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state

    const book = books.find(book => book.id === bookId)

    const cartItem = cartItems.find(item => item.id === bookId)

    let newItem = updateCartItem(cartItem, book, quatity)

    return {
        orderTotal: orderTotal + quatity * book.price,
        cartItems: updateCartItems(cartItems, newItem, cartItem)
    }
}


const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'BOOK_REMOVED_FROM_CART': {
            return updateOrder(state, action.payload, -1)
        }
        case 'ALL_BOOKS_REMOVED_FROM_CART': {
            const cartItem = state.shoppingCart.cartItems.find(item => item.id === action.payload)
            return updateOrder(state, action.payload, -cartItem.count)
        }

        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart