import React, { Component } from 'react'
import {getList} from '../../actions/GetList/GetList'
import {connect} from 'react-redux'
import axios from 'axios'
import {List, Button, Form, Checkbox} from 'semantic-ui-react'
import './styles.css'


class App extends Component {

  state = {
    itemtext: "",
    completed: false
  }
  componentDidMount(){
    getList()
  }

  addTask = (e) => {
    e.preventDefault()

    if(this.state.itemtext !== ""){
      axios.post('http://localhost:3001/listitems', {
        itemtext : this.state.itemtext,
        completed: this.state.completed
      }).then(resp => {
        getList()
      }).catch(e => {
        console.log(e)
      })
    }

    this.setState({
      itemtext: ""
    })
  }
 
  manageChange = (e) => {
    this.setState({
      itemtext: e.target.value
    })
  }
  



  render() {


    return (
        <div className="main">
          <div className="content">
          <h1>To Do List</h1>
            <Form onSubmit={this.addTask} id="onlyform"  className="holdtext">
              <input type="text" value={this.state.itemtext} name="itemtext" onChange={this.manageChange}/><Form.Button content='Add To List' className="butt"/>
            </Form>
            <List animated celled size='big'>
            {this.props.listitems.map(item => (
              <Item {...item} key={'item' + item.id} />
              ))}
            </List>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return{
   listitems: state.listitems
  }
}

export default connect(mapStateToProps)(App)




class Item extends Component {

  manageClick = (e) => {
      axios.patch(`http://localhost:3001/listitems/${this.props.id}`, {
        completed: !this.props.completed
      }).then(resp => {
        getList()
      })
    }
     deleteTask = (e) => {
    axios.delete(`http://localhost:3001/listitems/${this.props.id}`).then(resp => {
      getList()
    })
  }



  render() {
    return(
          <List.Item>
              <Checkbox toggle onChange={this.manageClick} label={this.props.itemtext} checked={this.props.completed} name="completed" value={this.props.id}/><Button floated='right' basic color='blue' type="button" value={this.props.id} onClick={this.deleteTask}>Delete</Button>
              </List.Item>

      )
  }

}








