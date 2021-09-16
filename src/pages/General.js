import React, { Component } from 'react'
import News from '../components/News';

              import NavBar from '../components/NavBar';
export class General extends Component {
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

export default General
