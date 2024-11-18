





const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelectorAll('#header');

const h = (t) => {
  t.style.height = 0;
};

// depth top 설정 코드
depthList.forEach((depth) => {
  depth.style.top = header.offsetHeight + 'px';
});



aList.forEach((a) => {
  // event binding => 'mouseenter' event => this 출력하기

  // '현재 선택'된 a태그 안에 있는 depth
  // currentTarget + lastElementChild

  // currentDepth에게 높이 주기 (100px)
  // node.style.height = ???

  // 모든 depth 높이 제거하기 (0px)
  // 모든 depth를 가져오기 => style 제거

  a.addEventListener('mouseenter', (e) => {
    const currentDepth = e.currentTarget.lastElementChild;


    depthList.forEach(h)
    // depthList.forEach((d) => d.style.height = 0);

    
    



    currentDepth.style.height = '100px';
  });
});




header.addEventListener('mouseleave',()=>{
  depthList.forEach(h)
})