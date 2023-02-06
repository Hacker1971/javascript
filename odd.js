function getodd(numbers){
    let sum = 0 ;
    for( let i=0; i< numbers.length; i++){
        const index= i;
        const element = numbers[index];
         sum = sum + element;
        // console.log(index , element, sum);
    }
    return sum;
}

function oddArray(numbers){
    let sum = 0;
    for (let i= 0; i< numbers.length; i ++){
        const index = i;
        const element = numbers[index];
        if(element % 2 ==1 ){
            sum += element;
            // console.log(index,element, sum);
        }
        
        
    }
    return sum;  
}




const myNumber = [12, 65, 45, 78, 32, 91, 38, 101, 39];
const oddNumbers = oddArray(myNumber);
console.log(oddNumbers);