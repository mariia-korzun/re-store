import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './shop-header.css'

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link to="/" className="logo text-dark">
                <div >ReStore</div>
            </Link>
            <Link to="/cart" className="shopping-cart">
                <div >
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
            </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({ shoppingCart }) => {
    return {
        numItems: shoppingCart.cartItems.length,
        total: shoppingCart.orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader)

