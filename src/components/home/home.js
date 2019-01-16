import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import './home.css'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            columnClass: 'column child'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.checkDimensions();
        window.addEventListener("resize", this.checkDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkDimensions);
    }

    /* = () => binds 'this' automatically to checkDimensions */
    checkDimensions = () => {
        var newVal = 'column child';
        if(window.innerWidth > 769 && window.innerWidth < 1000) {
            newVal = 'column is-one-third child';
        } else if(window.innerWidth > 1000 && window.innerWidth < 1200) {
            newVal = 'column is-one-quarter child';
        } else if(window.innerWidth > 1200) {
            newVal = 'column is-one-fifth child';
        }
        this.setState({columnClass: newVal}); 
    }

    render(){
        return (
            <div id="parent">
                <div id="progress-container">
                    <progress className="progress is-success" value={this.props.reviews.length} max={this.props.totalReviews}></progress>
                    <p><FontAwesomeIcon icon={faCalculator}/> {this.props.reviews.length} of {this.props.totalReviews} complete</p>
                </div>
                <div className="columns">
                    {this.props.reviews.map(review =>
                        <div className={this.state.columnClass} key={review.id}>
                            <Link to={`/review/${review.id}`}>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={window.location.origin + '/images/' + review.image} alt="Review tile" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <p className="title is-6">{review.title}</p>
                                        <p className="subtitle is-6" style={{ 'marginBottom': '15px'}}>By {review.author}</p>
                                        <div className="content" >
                                            <p id="tile-content">{review.content.replace(/<[^>]+>/g, '').substr(0, 50)}...</p>
                                            <p id="tile-createdon">{review.createdOn}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Home;