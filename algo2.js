function algo2(a) {
    let length = a.toString().length;
    let lastNmber = (a % 10).toString();
    let previousNumber = ((a - lastNmber) / 10).toString();
    for(let i = 0; i < length -1 ; i++){
        if(lastNmber !== previousNumber.charAt(i)){
            console.log('norepeat');
            console.log(`index: ${i} last number: ${lastNmber}, previous number ${previousNumber.charAt(i)}`);
            return;
        }
    }
    console.log('repeat');
    return;
}
algo2(55555);