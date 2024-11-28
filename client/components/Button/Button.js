
document.body.style.backgroundColor = 'black'







export class Button extends HTMLElement{

  constructor(){
    super()

    this.attachShadow({mode:'open'});

    
    this.state = {
      active: this.getAttribute('active') || false
    }

    this.render();


    
  }

  static get observedAttributes() {
    return ['active'];
  } 



  handleClick(){

    console.log('click~~');



  }

  render(){

    // const = ;

    this.shadowRoot.innerHTML = `
    <style>
      @import url("./components/Button/Button.css");
    </style>
    <button type="button" aria-pressed ="false">❤️</button>
    `
    

    this.addEventListener('click',this.handleClick.bind(this))
    
  }



  
}
