import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import News from '../components/News'
export class Home extends Component {

    render() {
        const { pageSize, country, category } = this.props
        return (

            <>
                <NavBar />
                <News pageSize={pageSize} country={country} category={category} />
            </>
        )
    }
}

export default Home
