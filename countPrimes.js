// counting a primes 
// input =  10
//  output = 4

function countPrime(num){
    const sieve = new Array(num).fill(true);
    console.log(sieve);

    let count = 0;

    sieve[0] = sieve[1] = false;
    
    for(let i = 2; i < num; i++){
        console.log("I am I i",[i])
        if(sieve[i]){
            console.log("I am A count",count = count + 1);
        }

        for(let j = i * i; j < num; j +=i){
            console.log([j],"------->", [i]);

            console.log("i am a false ",sieve[j] = false);
            ;
        }
    }

    return count;
}

const num = 10;

console.log(countPrime(num));
