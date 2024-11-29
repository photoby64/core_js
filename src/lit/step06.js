import { LitElement, html } from "lit";




class TodoList extends LitElement {

  static properties = {
    _listItems:{state:true}
  }
  
  constructor() {
    super();
    this._listItems = [
      {text:'독서하기', completed: true},
      {text:'독서', completed: false},

    ]
  }

  

  
  

  render() {
    return html /* html */ `
      <h2>TOdolist</h2>
      <ul>
      ${
        this._listItems.map((item)=>{
          return html `<li>${item.text}</li>`
        })
      }
      </ul>
      <label id="newItem">
      <input type="text" id="newItem" aria-lable="새">
      </label>
      <button type="button">cc</button>
    `
  }


}



customElements.define('todo-list',TodoList);

app.append(document.createElement('todo-list'));