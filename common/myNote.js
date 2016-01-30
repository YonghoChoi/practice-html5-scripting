function get(id) {
  var el = document.getElementById(id);
  if(el == null) {
    window.alert(id + " id가 존재하지 않습니다.");
  }
  return el;
}

function selector(pattern) {
  var node = document.querySelector(pattern)
  if(node == null) {
    window.alert(pattern + " 패턴이 존재하지 않습니다.");
  }
  return node;
}
