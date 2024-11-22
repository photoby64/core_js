const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

async function tiger(method,url,body){

  const response = await fetch(url,{
    method,
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
  });
  
  const data = await response.json();

}



tiger()



// console.log(await response.json());


