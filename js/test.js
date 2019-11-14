function testWhile(a) {
    var x=0;
    var y=0;
    while (y<a){

        if (y % 2 == 0){
            x = y+x;
        }
        y = y+1;
    }
    // Тут нужно написать решение
    return x;
}