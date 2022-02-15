import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layouts({children}) {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default Layouts
