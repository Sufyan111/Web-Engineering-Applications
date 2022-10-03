const largestOfThree = (num1, num2, num3) =>{
    let max = num1;
    if(num2>max || num3>max){
        max = num2;
        if(num3>max){
            max=num3
        }
    }

    console.log(max)
}

largestOfThree(10,20,300)
largestOfThree(10,200,30)
largestOfThree(100,20,30)