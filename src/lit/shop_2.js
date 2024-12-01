
import { LitElement, html, css } from "lit";



const data = [
  {id:1, product:'소고기 샤브샤브 밀키트', price: 15900, quantity:3 },
  {id:2, product:'비빔밥 세트', price: 11900, quantity:5 },
  {id:3, product:'차돌박이 숙주 볶음', price: 10320, quantity:2 }
];




class Shop extends LitElement {

    static properties = {
      _shoplist
    }

     constructor(){
      super();

      
     }

     

     

     render(){

      return html /* html */ `
      <div>
        <ul>
        <li><img src="https://picsum.photos/100/100"></li>
        <li class="product">${data[1]}</li>
        <li class="price">${data[2]}</li>
        <li class="quantity">${data[0]}</li>
        </ul>
      </div>
      `
     }
    
  
  }

  customElements.define('shop-list',Shop);

app.append(document.createElement('shop-list'));


