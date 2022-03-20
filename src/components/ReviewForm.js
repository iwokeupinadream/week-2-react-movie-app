import React from 'react'
import Stars from './Stars'

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        formData: {
          userReview: '',
          userSubmittedReview: ''
        }
        
    }
}

  // handleReview = (event) => {

  //   this.setState( state => ({ formData: { ...state.formData, userReview: event.target.value } }) )
  // }

  handleReviewText = (event) => {

    this.setState({
      userReview: event.target.value
    })
  }

  handleReviewSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.userReview)
    this.setState({
      userSubmittedReview: 'Your review: ' + this.state.userReview,
      //way to clear out value of textarea after submitting
    })
}
  
  render() {

    return (
      <div>
          
          
          <form className='form form-control'>

          <div className="form-group">
          <label>Please leave your Review:</label>
          <textarea onChange ={this.handleReviewText} className="form-control" rows="3"></textarea>
          </div>

            
            <Stars /> 
            <button onClick={(e) => this.handleReviewSubmit(e)} className='btn btn-success'>Submit Review</button>
            

          </form>
          <br></br>
          <p className='review-p'>{this.state.userSubmittedReview}</p>

      </div>
    )
  }
}
