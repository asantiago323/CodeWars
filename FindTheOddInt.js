function findOdd(A) {
  //happy coding!
  var i=0, j;
  if(A.length == 1){ return A[0];}
  else {
    var a = A.slice().sort(),
    last;
    for(i;i < A.length; i++){
      var count=1;
      if(a[i] !== last || last === null){
        for(j = i + 1; j < A.length; j++){
          if(a[j] == a[i]){
          count++;
          }
        }
      if(count%2 !== 0){return a[i];}
      last = a[i];
      }
    }
  }
  return 0;
}