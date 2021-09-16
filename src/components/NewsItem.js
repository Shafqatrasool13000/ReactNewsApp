import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        const { title, description, imgUrl, idUrl, author, publishedAt, source } = this.props;
        return (
            <>
                <div className="card" >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{ zIndex: 1, left: `${(source.name).length > 8 ? '90%' : '97%'}` }}>
                        {source.name}

                    </span>
                    <img src={imgUrl} className="card-img-top img-fluid" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <div className="card-footer">
                            <small className="text-muted">By {author ? author : 'Unknown'} Last updated {new Date(publishedAt).toUTCString()} ago</small>
                        </div>
                        <a href={idUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-dark">Read </a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
