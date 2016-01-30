var js = {lineNumber: 1};   // js는 key-value를 가진 Object가 됨.
js.log = function(text){    // js.log를 사용하면 function을 컴파일 하고 실행.
  var k, node, child, lineText;

  node = document.getElementById('result');
  if(!node){
    node = document.createElement('div');
    node.id = 'result';
    document.body.appendChild(node);
  }
  child = document.createElement('div');

  lineText = js.lineNumber + '. ';
  if(Array.isArray(text)){      // 출력할 대상이 배열일 경우의 처리
    lineText += '[';
    for(k = 0; k < text.length; k++){
      lineText += text[k] === '' ? '"': text[k];
      if(k < (text.length - 1) ){
        lineText += ',';
      }
    }
    lineText += ']';
  }else{      // 배열이 아닌 경우에는 그대로 출력
    lineText += text;
  }

  if(arguments.length > 1){
    for(var k = 1; k < arguments.length; k++){
      lineText += arguments[k];
    }
  }
  child.innerText === undefined ? child.textContent = lineText : child.innerText = lineText;
  node.appendChild(child);
  js.lineNumber += 1;
  return this;
};
