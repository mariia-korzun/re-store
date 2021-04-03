import React, { Component } from 'react'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'


const withData = (map) => (Wrapped) => {

    return class extends Component {


        componentDidMount() {
            const { fetchData } = this.props
            fetchData()
        }



        render() {

            const { loading, error, data } = map(this.props)

            if (error) {
                return <ErrorIndicator />
            }
            if (loading || data.length === 0) {
                return <Spinner />
            }
            return (
                <Wrapped {...this.props} />
            )
        }
    }
}

export default withData