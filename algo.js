function repdigit(a) {
    const length = a.toString().length;
    let number = a;
    for (let i = 0; i < length - 1; i++) {
        let last = number % 10;
        number = ((number - last) / 10);
        let previousLast = number % 10;
        if (last !== previousLast) {
            console.log('No Repdigit! hello testign');
            return;
        }
    }
    console.log('Repdigit!');
    return;
}
repdigit(41111111);