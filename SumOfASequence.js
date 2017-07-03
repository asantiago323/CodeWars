const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  var sum = 0;
  for(; begin <= end; begin+=step){sum += begin;}
  return sum;
};