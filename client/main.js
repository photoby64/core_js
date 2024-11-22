import { 
  tiger, 
  getNode,
  insertLast, 
  renderUserCard
 } from "./lib/index.js";



const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  const response = await tiger.get(END_POINT);

  const data = response.data;

  
  data.forEach((user)=> renderUserCard(userCardInner,user))
}



renderUserList()



// 1. user 데이터 fetch 해주세요.


// 2. fetch 데이터 유저의 이름만 콘솔에 출력 