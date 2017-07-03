let numbers = "2 4 7 8 10";
//let numbers = "1 2 2";
console.log(iqTest(numbers));

function iqTest(numbers){
  // ...
  var i = 0, even = [], odd = [], countO = 0, countE = 0;
  let num = numbers.split(' ');
  
  for(i; i < num.length; i++){
    if(num[i]%2 == 0){
      countE++;
      even.push(i+1);
    } else {
      countO++;
      odd.push(i+1);
    }
  }
  if(countE > countO){ return odd[0]; } else if (countO > countE) { return even[0];}
}