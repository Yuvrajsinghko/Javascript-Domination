let arr = [4,4,4,4,5,5,6,6,3,2,2,2,2,1,1,1]

const uniqueItems = (arr)=>{

    let result = [];
    for (let i = 0;i<arr.length;i++){
        if(result.indexOf(arr[i])=== -1)result.push(arr[i]
        )

    }
    return result
}

console.log(uniqueItems(arr));


