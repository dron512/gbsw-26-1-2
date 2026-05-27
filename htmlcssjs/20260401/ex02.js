function aa() {
    //for 구문 whiler구문 break continue 구문;
    console.log('aa');
    let num = 10;

    for (let i = 0; i < 5; i = i + 2) {

        if (i == 2) continue;
        console.log(i);
    }
    console.log(num);
}
// console.log(num);
aa();