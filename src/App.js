import React, {Component} from 'react';

class todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    console.log("this is state", this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }

  render () {
    return (
      <div className="todo">
        <div className="first">
          <form onEnter={this.formEnter}>
              <input placeholder="Enter Task" value={this.state.input} onChange={this.inputUpdate}></input>
              <button>Enter</button>
          </form>
            <ul>
              {this.state.items.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
        </div>
      </div>
    )
  }
}

export default todoapp;