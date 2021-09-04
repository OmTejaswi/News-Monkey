import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1d8ab729b3644f1db00d67c6df897667';
        // let url = 'http://api.mediastack.com/v1/news?access_key=0cc49ca835fba27c5be458ea93513b6d&languages=en&countries=in';
        let url = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        console.log(parsedData)
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description/*.slice(0,88)*/} newsUrl={element.url} imgUrl={element.urlToImage} />
                            </div>
                        )
                    })}

                    {/* Buttons */}
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark">&laquo; Previous</button>
                        <button type="button" className="btn btn-dark">Next &raquo;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
