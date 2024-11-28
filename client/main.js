


import { Button } from "./components/Button/Button.js";
import { TodoList } from './components/TodoList/TodoList.js';




const app = document.getElementById('app');



function defineElements(){
  customElements.define('custom-todo',TodoList)

}

defineElements()


const todoElement = document.createElement('custom-todo');


app.append(todoElement);