
import '@/style/style.css';
import { getNode, insertLast } from 'kind-tiger';
import santa from '/src/assets/santa.png';
import { btn } from '/src/style/style.module.css';

console.log(btn);

const app = getNode('#app');


const template = /* html */ `
  <figure class="container">
    <img style="width:30vw" src="${santa}" />
    <figcaption>산타 모자를 쓴..</figcaption>
  </figure>
  <button type="button" class="${btn}">BUTTON</button>
`


insertLast(app,template)

