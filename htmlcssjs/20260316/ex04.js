var a = {
    aa:10,
    bb:function(){ 
        console.log('bb함수'); 
        return 100;
    }
};
// cd ~ 사용자폴더
// ls 
// cmd + x 한줄 삭제 aa()
console.log(a.aa);
console.log(a.bb());