

import { LitElement, html } from 'lit';
import {  } from '/src/componets/TodoItem/TodoItem'

class TodoList extends LitElement {

  static properties = { // 속성 정의
    todoItems:{type:Array}
    
  }
  constructor() { // 앨리먼트 생성
    super();
    this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
    
  }

  handleAddItem(){ // 새로운 To-Do 항목을 추가하고 기존 TO-DO와 합체
    const newItem = {id: Date.now(), value:'', checked:false}
    this.todoItems = [...this.todoItems, newItem]

  }

  handleDelete(id){

    this.todoItems = this.todoItems.filter(item => item.id !== id);
    this.saveDate();

  }

  handleUpdate(){
    localStorage.setItem('todo', JSON.stringify(this.todoItems));
  }

  saveData(){
    localStorage.setItem('todo',JSON.stringify(this.todoItems));
  }

  



  render() {

    // console.log(this);
    
    return html`
      <div class='container'>
      <h1>To Do List</h1>
      <ul class="todo">

      ${

        this.todoItems.map( item => 

          html /* html */`
            <todo-item .id=${item.id} 
              .value=${item.value} 
              .checked=${item.checked}
              @update=${(e)=>this.handleUpdate(item.id, e.detail)}
              ></todo-item>
            
          `
        )
      }

      </ul>

      <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>

    `;
  }
}

customElements.define('todo-list', TodoList);
