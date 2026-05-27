function aa() {
    let num = 0;
    while (1) {
        console.log('무한루프');
        if (num == 2) break;
        num += 1;
    }
    console.log(`num = ${num}`);
}

aa();
// aa();