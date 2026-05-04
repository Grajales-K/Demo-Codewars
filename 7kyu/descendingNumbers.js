// level 7 kyu




function descendingOrder(n){
    return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
}


