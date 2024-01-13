import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleBtn = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqItemDetails} = this.props
    const {questionText, answerText} = faqItemDetails
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="ques-icon-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="plus-minus-btn"
            onClick={this.onToggleBtn}
          >
            <img src={imgUrl} alt={altText} className="plus-minus-img" />
          </button>
        </div>
        {isActive && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
