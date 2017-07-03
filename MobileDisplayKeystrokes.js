function mobileKeyboard(str){
  //1,2,3,4,5,6,7,8,9,0 = 1 key stroke
  let one = [1,2,3,4,5,6,7,8,9,0,'*','#'];
  //a,d,g,j,m,p,t,w = 2 key strokes
  let two = ['a','d','g','j','m','p','t','w'];
  //b,e,h,k,n,q,u,x = 3 key strokes
  let three = ['b','e','h','k','n','q','u','x'];
  //c,f,i,l,o,r,v,y = 4 key strokes
  let four = ['c','f','i','l','o','r','v','y'];
  //s,z = 5 key strokes
  let five = ['s','z'];
  
  let strokes = 0;
  
  for(var i = 0; i < str.length; i++){
    one.forEach(function(item){
      if(str[i] == item){ strokes += 1;}
    });
    two.forEach(function(item){
      if(str[i] == item){ strokes += 2;}
    });
    three.forEach(function(item){
      if(str[i] == item){ strokes += 3;}
    });
    four.forEach(function(item){
      if(str[i] == item){ strokes += 4;}
    });
    five.forEach(function(item){
      if(str[i] == item){ strokes += 5;}
    });
  }
  return strokes;
}