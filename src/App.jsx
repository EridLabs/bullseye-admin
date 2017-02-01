import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, <Link to="/world">world</Link></h1>
        <Route path="/world" render={() => <span>Hola</span>} />
      </div>
    )
  }
}

export default App
