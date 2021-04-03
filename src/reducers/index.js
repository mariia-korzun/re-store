import updatebookList from './book-list'
import updateShoppingCart from './shopping-cart'

const reducer = (state, action) => {

    return {
        bookList: updatebookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}


export default reducer
