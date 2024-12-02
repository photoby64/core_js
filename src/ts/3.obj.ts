


const user:{
  id?:number, // ?: 써도 그만 안써도 그만..
  name:string,
  age:number
} = {
  id:1,
  name: 'yk',
  age:10,
};


user.id = 10;
// user.address = 'a'

const config:{
  readonly apiKey:string // 읽기전용
} = {
  apiKey: 'sdnklnfkd@'
};
// config.apiKey = 'aaaaa'