import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    value: 'Light Mode',
    forinner: 'forInner',
    forbutton: 'forButton',
    forHeader: 'forheader',
  }

  onClicking = () => {
    this.setState(prevState =>
      prevState.value === 'Light Mode'
        ? {
            value: 'Dark Mode',
            forinner: 'forBlack',
            forbutton: 'forButton_color',
            forHeader: 'forheader_1',
          }
        : {
            value: 'Light Mode',
            forinner: 'forInner',
            forbutton: 'forButton',
            forHeader: 'forheader',
          },
    )
  }

  render() {
    const {value, forinner, forbutton, forHeader} = this.state
    return (
      <div className="for_div">
        <div className={forinner}>
          <h1 className={forHeader}>Click To Change Mode</h1>
          <button className={forbutton} type="button" onClick={this.onClicking}>
            {value}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
