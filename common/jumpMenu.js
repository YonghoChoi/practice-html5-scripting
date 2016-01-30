function jumpMenu(name){
  var selector = document.getElementById(name);
  var selectIdx = selector.options.selectedIndex;
  if( selectIdx === 0) {
    return;
  }

  var filePath = selector.options[selectIdx].value;

  var src = './' + name + '/' + filePath + '.html';
  var divId = 'jsView';

  var check = document.getElementById(divId);
  if(check) {
      check.remove();
  }
  var div = createDiv(divId);
  //var script = createScript(src);
  var iframe = createIframe(src);
  div.appendChild(iframe);
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
  attachPrefix(div);
  body.appendChild(div);
  return div;
}

function createScript(src) {
  var el = document.createElement("script");
  el.type = "text/javascript";
  el.src = src;
  return el;
}

function createIframe(src){
  var el = document.createElement("iframe");
  el.width = "1000";
  el.height = "1000";
  el.src = src;
  el.frameborder = "0";
  el.hspace = "0";
  el.vspace = "0";
  el.marginheight = "0";
  el.border = "0";
  el.scrolling = "yes";
  el.align = "center";
  return el;
}

function attachPrefix(div) {
  for(k = 0; k < 3; k++) {
      div.appendChild(document.createElement("br"));
  }
}
