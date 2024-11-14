function getAttr(node, prop) {

  if (isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if (!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.getAttribute(prop);

}