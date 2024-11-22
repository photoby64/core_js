console.log('tiger');



const END_POINT = 'https://jsonplaceholder.typicode.com/users'




const response = await fetch(END_POINT,{
  method: 'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({name:'tiger',age:20})
});



const data = await response.json();

console.log( data );





