function estPremier(n) {
    if (n < 2) return false;
    if (n === 2) return true; 
    if (n % 2 === 0) return false; 
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 5));  
console.log(sommeNombresPremiers(4, 5)); 
console.log(sommeNombresPremiers(7, 11));
console.log(sommeNombresPremiers(9, 3)); 
  
        
