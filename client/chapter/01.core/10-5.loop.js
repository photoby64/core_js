/* --------------- */
/* For Of Loop     */
/* --------------- */




// enumerable => 열거 가능한
// iterable   => 반복 가능한
// mutable    => 변경 가능한 ⭐️⭐️⭐️⭐️⭐️

// 배열은 iterable 합니다.
// 1. 순서가(index) 있다.
// 2. length 존재한다.



// 유사배열 arrayLike이 존재한다.

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length:3,
}
// console.log(arrayLike); // 출력:[[Prototype]]:Object







const message = new String('안녕 자바스크립트!');

for(const key of message){
  console.log(key);
}

// 출력:
// 안
// 녕
// 자
// 바
// 스
// 크
// 립
// 트
// !






console.clear();



// 배열 순환을 할때는 for..of 를 사용하자!






const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];









// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기


// 1. name 조회 
// 2. 포함 여부 확인 (str.includes)
// 3. if문 작성
// 4. continue 지시자 사용하기



// for (const value of languages){
//   //console.log(value.name);

//   const name = value.name


//   if (name.includes('Java') && name.length < 5 ) {
//     continue
    
//   }
//   console.log(value);


// }




console.clear();




const obj = {
  nickName:'tiger',
  age:40
}

// 객체인데.. for..of 사용하고 싶다.. 미치도록... 
// 1. symbol.iterator => 핵귀찮음
// 2. 객체를 배열로 만들어버려!


for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  
}











const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단