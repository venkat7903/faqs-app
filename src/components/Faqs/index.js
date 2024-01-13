// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

function Faqs(props) {
  const {faqsList} = props
  return (
    <div className="faqs-app-container">
      <div className="sub-faqs-app-container">
        <h1 className="faqs-title">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqItemDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
