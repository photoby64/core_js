



export class Button extends HTMLElement {
  constructor() {
    super();
    // 엘리먼트가 생성됨
  }

  connectedCallback() {
    // 엘리먼트가 문서에 추가될 때 브라우저가 이 메서드를 호출합니다.
    // (엘리먼트가 반복적으로 추가/제거되면 여러 번 호출될 수 있음)
    console.log('나 태어남ㅋ');
  }

  disconnectedCallback() {
    // 엘리먼트가 문서에서 제거될 때 브라우저가 이 메서드를 호출합니다.
    // (엘리먼트가 반복적으로 추가/제거되면 여러 번 호출될 수 있음)
    console.log('나죽음');
  }

  
  
}