function base(c,d,whatToDo,track){
    const result = 'The calculated result: '+whatToDo(c,d);
    track();
    console.log(result);
}

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a * b;
}

function test(){
    let a = 0;
    function countUp(){
        a++;
    }
    base(4,5,add,countUp);
    base(4,5,multiply,countUp)


    console.log('base called times ',a);
}

test();