// let array = [2, 3, 4, 5, 5];
// const array1 = [2, 5];
// const array3 = [];
// let array3 = array.filter(myFunction);
// function myFunction(value) {
// for (let i = 0; i < array1.length; i++){
//  myarry = (value > array1[i] || value <array1[i]);
// }
// return myarry;
// }


//problem...
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function myFunction(array = [], array1 = []) {
    // console.log(array);
    let array3 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array[i] == array1[j]) {
                // console.log(`equal ${array[i]} ${array1[j]}`)
                console.log(`equal i = ${i} j = ${j}`)
                continue;
            }
            else {
                // console.log(array[i])
                console.log(`not equal i = ${i} j = ${j}`)
                array3.push(array[i]);
            }
        }
    }
    // return array.filter((n) => !array1.includes(n));
    return array3;
}
console.log(myFunction([2, 3, 4, 5, 5], [2, 5]));