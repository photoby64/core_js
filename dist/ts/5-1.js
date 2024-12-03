// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["friday"] = 6] = "friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
// 숫자형 enum 정의
console.log(Days.Sunday); // 1
console.log(Days.Saturday); // 7
// 문제: TrafficLight enum 정의후 switch case를 사용한 비교 
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Green"] = "Green";
    TrafficLight["Yellow"] = "Yellow";
})(TrafficLight || (TrafficLight = {}));
console.log(TrafficLight.Red); // Red
// 신호등 색상에 따라 동작을 변경하는 함수
function 신호등(light) {
    switch (light) {
        case TrafficLight.Red:
            console.log('Stop!');
            break;
        case TrafficLight.Green:
            console.log('gogo!');
            break;
        case TrafficLight.Yellow:
            console.log('갈까말까');
            break;
    }
}
// 사용 예시
신호등(TrafficLight.Red); // Stop!
신호등(TrafficLight.Green); // Go!
export {};
