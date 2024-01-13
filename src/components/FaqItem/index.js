import './index.css'

function FaqItem(props) {
  const {faqItemDetails, togglePlusMinus} = props
  const {id, questionText, answerText, isAnswerVisible} = faqItemDetails
  const imgUrl = isAnswerVisible
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isAnswerVisible ? 'minus' : 'plus'
  function onClickPlusMinus() {
    togglePlusMinus(id)
  }
  return (
    <li className="faq-item">
      <div className="ques-icon-container">
        <h1 className="question-text">{questionText}</h1>
        <button
          type="button"
          className="plus-minus-btn"
          onClick={onClickPlusMinus}
        >
          <img src={imgUrl} alt={altText} className="plus-minus-img" />
        </button>
      </div>
      {isAnswerVisible && <p className="answer-text">{answerText}</p>}
    </li>
  )
}

export default FaqItem
