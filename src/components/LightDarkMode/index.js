// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    cardBg: 'dark-bg',
    head: 'white-head',
    btnBg: 'white-button',
    btnText: 'Light Mode',
  }

  changeMode = () => {
      this.setState(if (cardBg==="dark-bg"){
          return ({cardBg:"white-bg",head:"dark-head",btnBg:"dark-button",btnText:"Dark Mode"})
      }
      else{return ({cardBg: "dark-bg",
    head: "white-head",
    btnBg: "white-button",
    btnText: "Light Mode"})})
  }

  render() {
    const {cardBg, head, btnBg, btnText} = this.state

    return (
      <div className="bg">
        <div className={cardBg}>
          <h1 className={head}>Click To Change Mode</h1>
          <div className="btn">
            <button type="button" className={btnBg} onClick={this.changeMode}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
