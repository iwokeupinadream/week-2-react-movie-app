import React from 'react'
import Stars from './Stars'
import ReviewForm from './ReviewForm'


export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        title: props.title,
        releaseDate: props.releaseDate,
        image: props.image,
        summary: props.summary
    }
}
  
  render() {

    // let movies
    // if (this.state.movies) {
    //       movies = this.state.title.map((movie, index) => <title key ={index} {...title} />)
        
    // }

    return (
        
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">Date released: {this.state.releaseDate}</p>
                <img src={this.state.image}></img>
                <br></br>
                <br></br>
                <p className="card-text">Movie description: {this.state.summary}</p>
            </div>

            <ReviewForm />

        </div>
        
    )
  }
}
