function jsExec(){
  var filePath = document.getElementById("filePath").value;
  var selectDirectory = document.getElementById("selectDirectory");

  var src = './' + filePath + '.js';
  var divId = 'jsView';

  js.log('=== ' + filePath + '.js ===');
  removeDiv(divId);
  var check = document.getElementById(divId);
  var div = createDiv(divId);
  var script = createScript(src);
  div.appendChild(script);
}

function removeDiv(id){
  var div = document.getElementById(id);
  if( div !== null){
    var body = document.getElementsByTagName('body')[0];
    body.removeChild(div);
  }
}

function createDiv(id) {
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement("div");
  div.id = id;
  body.appendChild(div);
  return div;
}

function createScript(src) {
  var el = document.createElement("script");
  el.type = "text/javascript";
  el.src = src;
  return el;
}
