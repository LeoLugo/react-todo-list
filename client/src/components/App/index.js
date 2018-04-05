import React, { Component } from 'react'
import List from '../List'

class App extends Component {

  addTask = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  render() {
    return (
        <div>
          <form>
            <input type="text" onBlur={this.addTask}/>
            </form>
          <List />
        </div>
    )
  }
}

export default App
