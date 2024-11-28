export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode:'open'});

    this.render()

    console.log(this.getAttribute('active'));


    
  }

  handleClick(){
    
  }

  render(){

    this.shadowRoot.innerHTML = `
    <style>
      @import url("./components/Button/Button.css");
    </style>
    <button type="button" aria-pressed="true" aria-label="">🔥</button>
    
    `
    this.shadowRoot.addEventListener('click',this.handleClick.bind(this))
  }

  


  



  



}