function rotate(arr,rotatedTimes){
    let length=arr.length;
    for(let i=0;i<rotatedTimes;i++){
        let b=arr[0];

        for(let j=0;j<length;j++){
            arr[j]=arr[j+1];
        }
        arr[length-1]=b;
    }
    return arr;
}
const result = rotate([1,2,3,4,5],3);
console.log(result);