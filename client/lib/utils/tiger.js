const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

async function tiger(options){

  const config = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };



  const {url,...restOptions} = config

  const response = await fetch(url,restOptions);
  const data = await response.json();

}



tiger({
  method: 'POST',
  url: END_POINT,
  body: { name: 'tiger', age: 33 }
});




// console.log(await response.json());


