import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        const { title, description, imgUrl, idUrl } = this.props;
        return (
            <div className="card" style={{ width: '18rem' }} key={idUrl}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newdetails" className="btn btn-sm btn-primary">Read </a>
                </div>
            </div>
        )
    }
}

export default NewsItem