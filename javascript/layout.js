function count(){
  var index = 1;
  return function(){
    return index++;
  }
}
var span     = document.getElementById("index");
var getIndex = count();

document.getElementById("btn").onclick = function(){
                                                      span.innerHTML = getIndex();
                                                    };