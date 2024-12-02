// 문제: 다양한 타입들이 동작할 수 있는 narrowing을 작성해주세요
// function processInput(input: object | string | number | any[] | Error ): void {
//   console.log( input.toUpperCase() );
//   console.log( input ** 2 );
//   console.log( input.length );
//   console.log( input.message );
// }
function processInput(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    if (typeof input === 'number') {
        console.log(input ** 2);
    }
    if (Array.isArray(input)) {
        console.log(input.length);
    }
    if (input instanceof Error) {
        console.log(input.message);
    }
}
export {};
