function largestEle(num, k){
   console.log(num.sort((a,b) => a - b));
   
   
   return num[k - 1];
}

const num = [3,2,1,5,6,4];

const k = 2;

console.log(largestEle(num, k));

/*

1 2 3 4 5 6 
  2 3 4 5 6
    3 4 5 6 
      4 5 6 
        5 6
          6  
        -----> 2 


*/

