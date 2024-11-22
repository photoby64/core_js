
import { tiger } from "./lib/index.js"



const END_POINT = 'https://jsonplaceholder.typicode.com/users'


// const response = await fetch(END_POINT);
// console.log( await response.json() );

async function renderUserList(){

  const response = await tiger.get(END_POINT)

  const data = response.data;

  data.forEach((user) => {
    console.log(user);

  })

}

renderUserList()