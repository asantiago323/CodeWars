public class Solution {
  public int solution(int number) {
    //TODO: Code stuff here
    int sum = 0; //initialize sum
    for(int i = 0; i < number; i++){ //loop through number below input
      if((i%5) == 0 && (i%3) == 0){//if divisible by both 5 and 3
        sum+=i;//add number to sum
      } else if ((i%5) == 0 || (i%3) == 0){//if divisible by 5 or 3
        sum+= i;//add number to sum
      } 
    }
    return sum;//return sum
  }
}