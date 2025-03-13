function tri(numbers, order){  
    let n = numbers.length;

    for (let i = 0; i < n - 1; i++) {
        let index = i;

        for (let j = i + 1; j < n; j++) {

            if ((order === "asc" && numbers[j] < numbers [index]) ||
                (order === "desc" && numbers[j] > numbers [index])){
                    index = j;
                }
        }
            if (index !== i) {
                let temp = numbers [i];
                numbers[i] = numbers [index];
                numbers [index]= temp;
            }
                return numbers;
    }
} 
  


    console.log (tri([ 5, 7, 8, 1, 6], "asc"));
    console.log (tri([ 1, 4, 8, 1, 5], "desc"));
   
