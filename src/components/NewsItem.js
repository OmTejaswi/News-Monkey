import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, time, author, source, badge } = this.props;

        return (
            <div class>
                <div className="card" style={{ width: "20rem" }}>
                    <span class={`position-absolute top-0 translate-middle badge rounded-pill bg-${badge}`} style={{ left: '90%', zIndex: 1 }}>
                        {source}
                    </span>
                    <img src={imgUrl} className="card-img-top" alt="Image not available" /* {{style={{width:"500px", height:"180px"}} */ />
                    <div className="card-body mx-4">
                        <b><h6 className="card-title">{title}</h6></b>
                        <p className="card-text"><small className="text-muted">Last updated on {new Date(time).toUTCString()} by {author === null ? '"unknown"' : author} </small></p>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem