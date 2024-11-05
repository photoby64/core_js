/* --------------- */
/* For Of Loop     */
/* --------------- */


// Enumerable : 열거 가능한 
// ✅ Iterable: 반복 가능한

// for...of iterable 요소만 사용 가능

// 배열은 iterable 합니다.
// 1. 순서가(index) 있다.
// 2. length 존재한다.

// 유사배열 array like이 존재한다.

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
// - 특정 조건에서 건너띄기 [java 문자 포함시 (continue) 하기] 
// - 특정 조건에서 중단하기


// 1. name 조회
// 2. 포함 여부 확인
// 3. continue 지시자 사용하기

// for(const value of languages){
   
//   const name = value.name;

//   if(name.includes('Jave') && name.length < 5){

//     continue
//   }
//   console.table(value);
  
// }




//
//
//
//
//

const obj = {
  nickName:'tiger',
  age:40
}


// 객체인데.. for..of 사용하고 싶다.. 미치도록... 
// 1. symbol.iterator => 핵귀찮음
// 2. 객체를 배열로 만들어버려!

// 객체의 static method

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const entries = Object.entries(obj); // 객체의 [key,value]들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환' 하는 유틸 함수


// for(const keyValue of entries){
  
//   const key = keyValue[0];
//   const value = keyValue[1];


//   //console.log(value);
// }


for(const [key,value] of entries(obj)){
  
  // const key = keyValue[0];
  // const value = keyValue[1];


  console.log(value);
}














//
//
//
//



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


Object.prototype.nickName = 'tiger';


// for(const value in randomUser){
//   if(Object.hasOwn(randomUser,value)){
//     const L1 = randomUser[value];
//     console.log('\t',L1);
//     if(typeof L1 === 'object'){
//       for(const value in L1){
//         if(Object.hasOwn(L1,value)){
//           const L2 = L1[value];
//           console.log('\t\t',L2);
//           if(typeof L2 === 'object'){
//             for(const value in L2){
//               if(Object.hasOwn(L2,value)){
//                 const L3 = L2[value];
//                 console.log('\t\t\t',L3);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }


// 재귀 함수
// 왜 이런걸 하는거야;;

for(const keyValue of Object.entries(randomUser)){
  const key = keyValue[0];
  const value = keyValue[1];

  if(typeof value === 'object'){
    
    for(const keyValue of Object.entries(value)){
      const key = keyValue[0];
      const value = keyValue[1];

      if(typeof value === 'object'){
        
        for(const keyValue of Object.entries(value)){
          const key = keyValue[0];
          const value = keyValue[1];
        }
      }
    }
  }
}



// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단