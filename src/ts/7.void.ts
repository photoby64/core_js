

// 어떠한 값도 가지지 않겠다.


function sayHi():string{ // 함수의 리턴값은 string
  
  return 'hello'

}


function printHi():void{
  console.log('hi'); // 리턴값이 없는 함수
}
printHi()








// never type: 존재하지 않고 불가능하거나 정의할 수 없는 타입
function showError(message:string):never{
  throw new Error(message) // 에러나, 반복문 등 애매한 애들이 있슴둥
}

showError('해당 함수는 에러가 발생했습니다.')