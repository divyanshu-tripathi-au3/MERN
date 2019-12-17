import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <div className="container" style={{ marginTop: "80px"}} ><center><h4>To Do APP</h4> </center><hr/>
          <div className="row">
            <div className="col-lg-8 offset-lg-3 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
