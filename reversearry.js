function reverce(a){
    let length1 = a.length; 
    for (let i = 1; i <length1; i++){
     let rota = a.shift();
     console.log(rota);
     a.splice(length1 - i,0,rota);
    }
    console.log(a);
    return ;
}
    reverce([2]); 