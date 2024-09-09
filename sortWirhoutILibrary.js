function bubbleSort(num){
    let n = num.length; // n is referce the length of the num 

    for(let i = 0; i < n - 1; i++){ // i is 0 - len - 1 i.e n = 4 -- 4 - 1 = 3

        console.log("I am I",num[i]);
        

        for(let j = 0; j < n - i - 1; j++){

            console.log("I am J",num[j]);
            

            if(num[j] > num[j + 1]){
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;  

                console.log("I am Temp",temp);
                
            }
        }
    }

    return num;
}

const num = [5, 3, 5, 2, 1, 0];

console.log(bubbleSort(num));
