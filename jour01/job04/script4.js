function bisextile(année){
    if ((année % 4 === 0)){
        return true;
    }else{
        return false;
    }
}
console.log(bisextile(2025));
console.log(bisextile(1974));