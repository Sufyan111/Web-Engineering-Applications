const largestInArray = (arr) =>{
    let max = arr[0]

    arr.forEach(element => {
        (element > max) && (max = element)
    });
    console.log(max)
}

largestInArray([1,2,2,3,6,9,55,6,6,1.3,55.99,-900])