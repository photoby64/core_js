import { LitElement, html } from "lit";





class TodoItem extends LitElement {
  
  static properties = {
    id:{type:Number},
    value:{type:String},
    checked:{type:Boolean}
  }
  
  constructor(){
    super();
    this.id = 0;
    this.value = '';
    this.checked = false;

  }

  handleToggleClicked(){
    this.checked =  !this.checked;

    this.dispatchEvent(
      new CustomEvent('update' ,{
        detail:{checked:this.checked},
        bubbles:true,
        composed:true
      })
  
    )
    

  }

  render(){
    return html /* html */`
      <li class="item">
        <input type="checkbox" .checkbox=${this.checked} @click=${this.handleToggleClicked}/>
        <input type="text"/>
        <button type="button">x</button>
      </li>
    

    
    `
  }

}



customElements.define('todo-item',TodoItem);