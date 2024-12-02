


// ⭐️⭐️⭐️⭐️⭐️⭐️ generic type ⭐️⭐️⭐️⭐️⭐️⭐️ //


function sumFunc<T>(value:T):T{ // 대부분 T로 쓴다.
  return value
}

const a = sumFunc(10);
const b = sumFunc('hello');
// const c = sumFunc(); // 에러!


/* 

  T : Type
  U : Unknown or Unique
  K : Key
  V : Value
  E : Element
  R : Return

*/



function swapAtoB<T,U>(a:T,b:U):(T|U)[]{

  return [b,a]

}

swapAtoB(1,true) // [true,1]

