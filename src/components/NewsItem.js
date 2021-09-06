import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, time } = this.props;

        return (
            <div class>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl} className="card-img-top" alt="Image not available" width="500px" height="180px" />
                    <div className="card-body mx-4">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{time}</p>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem