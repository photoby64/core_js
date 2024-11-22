import { 
  tiger, 
  getNode,
  insertLast, 
 } from "./lib/index.js";



const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  const response = await tiger.get(END_POINT);

  const data = response.data;

  
  data.forEach(({username,email,website})=>{

    const tag = `
      <article class="user-card" data-index="user-1">
          <h3 class="user-name">${username}</h3>
          <div class="user-resouce-info">
            
            <div>
              <a class="user-email" href="mailto:${email}">${email}</a>
            </div>
            <div>
              <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>
     `
    
    insertLast(userCardInner,tag)
    
  })
}



renderUserList()



// 1. user 데이터 fetch 해주세요.


// 2. fetch 데이터 유저의 이름만 콘솔에 출력 