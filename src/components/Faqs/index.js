// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqsList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const modifiedFaqsList = faqsList.map(each => ({
      ...each,
      isAnswerVisible: false,
    }))
    this.setState({faqsList: modifiedFaqsList})
  }

  togglePlusMinus = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(each => {
        if (each.id === id) {
          return {...each, isAnswerVisible: !each.isAnswerVisible}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="faqs-app-container">
        <div className="sub-faqs-app-container">
          <h1 className="faqs-title">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                faqItemDetails={each}
                togglePlusMinus={this.togglePlusMinus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
