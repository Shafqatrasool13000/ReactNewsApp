import React, { Component } from 'react'
import Loader from './Loader'
import NewItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'uk',
        pageSize: 5,
        category: 'general'
    };
    static propTypes = {
        country: PropTypes.string.isRequired,
        pageSize: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    };
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} React News`;
       
    }

    async updateNews() {

        try {
            let webUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
            const response = await fetch(webUrl);
            const gotNews = await response.json();
            const { articles } = gotNews
            this.setState({
                articles: articles,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        try {
            let webUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
            const response = await fetch(webUrl);
            const gotNews = await response.json();
            const { totalResults, articles } = gotNews
            this.setState({
                articles: articles,
                loading: false,
                totalResults: totalResults
            })
        } catch (error) {
            console.log(error)
        }
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        try {
            let webUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
            const response = await fetch(webUrl);
            const gotNews = await response.json();
            const { articles } = gotNews
            this.setState({
                articles: this.state.articles.concat(articles),
            })

        } catch (error) {
            console.log(error)
        }
    };

    render() {
        return (
            <>
                <h1 className='text-center my-4'>Top {this.props.category === 'general' ? null : this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Loader /> }
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loader />}
                >
                    <div className="container my-3" >
                        <div className="row" >
                            {this.state.articles.map((element) => {
                                const { title, description, urlToImage, url, author, publishedAt, source } = element
                                return (
                                    <div className="col-md-4" key={url}>
                                        <NewItem title={title} description={description} imgUrl={!urlToImage ? 'https://ktla.com/wp-content/uploads/sites/4/2021/09/then-now-sept-11-9-11-attacks-lower-manhattan-photos.jpg?w=1280' : urlToImage} idUrl={url} author={author} publishedAt={publishedAt} source={source} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
