function permute(num){
    if(num.length <= 1){
        return [num];
    }

    let val = num.pop();

    console.log(val);
    

    let prevRes = permute(num);
    console.log(prevRes);
    

    const result = [];

    for(let res of prevRes){
        for(let i = 0; i <= res.length; i++){
            let nRes = Array.from(res);
            console.log(nRes);
            
            nRes.splice(i, 0, val);

            result.push(nRes);
        }
    }

    
    console.log(result);

    num.push(val)
    return result;
    
}

const num = [1,2,3];

console.log(permute(num));
