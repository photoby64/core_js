


// ⭐️⭐️⭐️⭐️⭐️⭐️ generic type ⭐️⭐️⭐️⭐️⭐️⭐️ //


function sumFunc<Type>(value:Type):Type{ // Type은 변수이름이고 내가 정할수 있는데 대부분 T로 쓴다.
  return value
}

const a = sumFunc(10);
const b = sumFunc('hello');



function swapAtoB<T,U>(a:T,b:U):(T|U)[]{

  return [b,a]

}

swapAtoB(1,true) // [true,1]


