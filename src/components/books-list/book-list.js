import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookListItem from '../book-list-item'
import { compose } from '../../utils'
import { fetchBooks, bookAddedToCart } from '../../actions'

import { withBookstoreService, withData } from '../hoc'

import './book-list.css'

class BooksList extends Component {

    render() {
        const { books, onAddedToCart } = this.props


        return (
            <ul className="book-list">
                { books.map(book => {
                    return (
                        <li key={book.id} >
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
                        </li>
                    )
                })
                }
            </ul>
        )
    }

}




// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch(booksLoaded(newBooks))
//         }
//     }
//}
//     the same 
//
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ booksLoaded }, dispatch)
//}
//чтобы этого не делать можно просто передать обьект actioncreators { booksLoaded }

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchData: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

const map = (props) => {
    return {
        data: props.books,
        loading: props.loading,
        error: props.error
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withData(map)
)(BooksList)

