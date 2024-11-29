
import { LitElement, html } from 'lit'



class MyElement extends LitElement {

  static properties = {
    version:{} // 항상객체!!!
  }

  constructor(){
    super();
    
    this.version = '1.0.0' // 속성 불러오기!

  }

  render(){ // 꺼내서 쓰기!
    return html `
      <div>${this.version}</div> 
    `
  }




}


// @customElement('my-element')
customElements.define('my-element',MyElement);

app.append(document.createElement('my-element'))