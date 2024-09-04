function* abc(){
    yield `a`;
    yield `b`;
}

for(let letter of abc()){
    console.log(letter.toUpperCase());
}


function* nameGen(){
    yield `umesh`;
}

for(let name of nameGen()){
    console.log(name.toUpperCase());
}