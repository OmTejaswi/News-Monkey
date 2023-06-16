import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    async updateNews() {
        this.setState({ loading: true })
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, json: parsedData, loading: true })        
    }

    componentDidMount() {
        // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1d8ab729b3644f1db00d67c6df897667';
        // let url = 'http://api.mediastack.com/v1/news?access_key=0cc49ca835fba27c5be458ea93513b6d&languages=en&countries=in';
        this.updateNews();
    }

    fetchMoreData = () => {
       
        if(this.state.totalResults > this.state.page[1]){
            this.setState({loading: false})
            this.setState({ page: [0, this.state.page[1] + this.props.pageSize]})
            this.setState({loading: true})
        } 
        else if(this.state.totalResults <= this.state.page[1])
        {
            this.setState({loading: false})
        }
        
       
        // console.log('entered')
        // if(this.state.totalResults > this.state.page[1]) {
        //     this.setState({loading: true, page: [0, this.state.page[1] + this.props.pageSize]})
            console.log(this.state.page[1])
            console.log(this.state.totalResults, this.state.page[1], this.state.articles.length)
        // } else {
        //     this.setState({loading: true})
            
        // }
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div className="container">
                <h3 className='text-center my-4'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
                <div className="text-center">
                    {/* {this.state.loading && <Spinner />} */}
                </div>
                <div className="row">
                    {this.state.articles.slice(0, this.state.page[1]).map((element) => {
                        return (
                            <div className="col my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description/*.slice(0,88)*/} newsUrl={element.url} imgUrl={element.urlToImage} time={element.publishedAt} author={element.author} source={element.source.name} badge={this.props.badge} /*json={this.state.json}*/ />
                            </div>
                        )
                    })}
                    <div className="text-center">
                       {this.state.loading && <InfiniteScroll
                            dataLength={this.state.articles.length}
                            pullDownToRefreshThreshold={0.1}
                            next={this.fetchMoreData}
                            hasMore={this.state.loading}
                            loader={<Spinner />}
                        />}
                    </div>
                </div>
            </div>
        )
    }
}

export default News