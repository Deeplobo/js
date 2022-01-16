function algo1(a) {
    let length = a.toString().length;
    let lastNumber = (a % 10);
    let myNumber = " ";
    for(let i=0; i < length; i++){
        myNumber += lastNumber.toString();
    }
    // return myNumber;
    if((a / Number(myNumber)) === 1){
        return 'repeat';
    }
    else{
        return 'norepeat';
    }
}
console.log(algo1(1111111111111111));