const plusOne = function(digits){

        const carry = 1;
        const plusOne = [];
        for(let i = 0; i < digits.length; i++){
            if(digits[i] < 9){
            
                console.log(plusOne.push(digits[i] + carry));
                
            }
        }
    
        return plusOne;
    };

const digits = [1,2,3];

plusOne(digits);