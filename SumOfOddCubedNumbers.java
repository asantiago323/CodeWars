var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var last, list = [];
  for(var i = 0; i<iterable.length; i++){
    if(iterable[i] != last){
      last = iterable[i];
      list.push(last);
    }
  }
  return list;
}