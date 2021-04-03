import React from 'react'
import { connect } from 'react-redux'
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from '../../actions'

import './shopping-cart-table.css'

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderCartItem = (item, index) => {
        const { id, price, title, count } = item
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{price}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                </td>
            </tr>
        )
    }
    let elements = null
    if (items) {
        elements = items.map(renderCartItem)
    }
    return (
        <div className="chopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)