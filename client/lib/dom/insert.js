function insertBefore(node,text){

  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin',text);

}

function insertFirst(node,text){

  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin',text);

}


function insertLast(node,text){

  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend',text);

}
//insertLast(ul, template);


function insertAfter(node,text){

  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend',text);

}