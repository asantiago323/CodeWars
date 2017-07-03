class SmallestIntegerFinder {
  findSmallestInt(args) {
    var me = args[0], 
        i = 0;
    for(i; i < args.length ; i++){
      if(args[i] < me){
        me = args[i];
      }
    }
    return me;
  }
}