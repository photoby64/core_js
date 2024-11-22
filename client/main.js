
import { getNode, insertLast, tiger } from "./lib/index.js"



const END_POINT = 'https://jsonplaceholder.typicode.com/users'

const userCardInner = getNode('.user-card-inner');


// const response = await fetch(END_POINT);
// console.log( await response.json() );

async function renderUserList(){

  const response = await tiger.get(END_POINT)

  const data = response.data;

  data.forEach((user) => {
    console.log(user.name);

    // 태그만들기
    const tag = `  <div>${user.name}</div>  `
    const tag2 = `
    <article class="user-card" data-index="user-1">
          <h3 class="user-name">${user.username}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:${user.email}">${user.email}</a>
            </div>
            <div>
              <a class="user-website" href="${user.website}" target="_blank" rel="noopener noreferer">${user.website}</a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>
    `

    // 화면에 랜더링
    insertLast(userCardInner,tag2)

    // 유저 아티클 만들기





  })


}

renderUserList()