const myFunction = () => ({
    suman: () => {
        console.log('Suman Das');
    },
    deep: () => {
        console.log('Deep Chowdhury');
    }
});

const { suman, deep } = myFunction();
suman();
deep();