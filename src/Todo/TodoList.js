import React, { Component } from 'react'
import '../index.css'

class TodoList extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      items: []
    }
  }

  onChange (event) {
    this.setState({
      userInput: event.target.value
    })
  }

  // Ajouter un item dans le tableau
  addTodo (event) {
    event.preventDefault()
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    })
  }

  // supprimer une Todo
  deleteTodo (event) {
    event.preventDefault()
    const array = this.state.items
    const index = array.indexOf(event.target.value)
    array.splice(index, 1)
    this.setState({
      items: array
    })
  }

  renderTodos () {
    return this.state.items.map(item => {
      return (
        <div className='list-group-item' key={item}>
          {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        <h1 align='center'>Todo List</h1>
        <form className='form-row align-items-center'>
          <input
            value={this.state.userInput}
            type='text'
            placeholder='Renseigner un item'
            onChange={this.onChange.bind(this)}
            className='form-control mb-2'
          />
          <button onClick={this.addTodo.bind(this)} className='btn btn-primary'>
            Ajouter
          </button>
        </form>
        <div className='list - group'>{this.renderTodos()}</div>
      </div>
    )
  }
}

export default TodoList
