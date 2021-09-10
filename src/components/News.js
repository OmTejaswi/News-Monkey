import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        page: [0, 10],
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        page: PropTypes.array,
        category: PropTypes.string,
    }

    articles = [];

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: [0, this.props.pageSize],
            totalResults: undefined,
        }
    }

    async componentDidMount() {
        // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1d8ab729b3644f1db00d67c6df897667';
        // let url = 'http://api.mediastack.com/v1/news?access_key=0cc49ca835fba27c5be458ea93513b6d&languages=en&countries=in';
        this.setState({ loading: true })
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, json: parsedData })
    }

    handleNxClick = () => {
        this.setState({
            page: [this.state.page[0] + this.props.pageSize, this.state.page[1] + this.props.pageSize]
        })
    }

    handlePreClick = () => {
        this.setState({
            page: [this.state.page[0] - this.props.pageSize, this.state.page[1] - this.props.pageSize]
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className='text-center my-3'>NewsMonkey - Top Headlines</h2>
                <div className="text-center">
                    {this.state.loading && <Spinner />}
                </div>
                <div className="row">
                    {!this.state.loading && this.state.articles.slice(this.state.page[0], this.state.page[1]).map((element) => {
                        return (
                            <div className="col my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description/*.slice(0,88)*/} newsUrl={element.url} imgUrl={element.urlToImage} time={element.publishedAt} author={element.author} source={element.source.name} badge={this.props.badge} /*json={this.state.json}*//>
                            </div>
                        )
                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page[0] === 0 && this.state.page[1] === this.props.pageSize} type="button" className="btn btn-dark my-3" onClick={this.handlePreClick}>&laquo; Previous</button>
                        <button disabled={this.state.totalResults < this.state.page[1]} type="button" className="btn btn-dark my-3" onClick={this.handleNxClick}>Next &raquo;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
