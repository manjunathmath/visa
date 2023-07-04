import React from 'react'
import Header from './Header'
import Footer from './Footer'

function DefaultLayout(props) {
    return (
        <div>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout